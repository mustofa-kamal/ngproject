const express = require('express');
const bodyParser = require('body-parser');
const textToSpeech = require('@google-cloud/text-to-speech');
const fs = require('fs').promises;
const path = require('path');
const mammoth = require('mammoth'); // Use mammoth to convert docx to plain text

const app = express();
const port = 3000;

// Set up Google Cloud Text-to-Speech client
const client = new textToSpeech.TextToSpeechClient({
  keyFilename: 'pdf-to-speech-0-8bf1fdbf3053.json', // Replace with the path to your service account key file
});

app.use(bodyParser.json());

const CHUNK_SIZE = 4000; // Maximum chunk size for Google Text-to-Speech API

function splitText(text, size) {
  const chunks = [];
  let index = 0;
  while (index < text.length) {
    chunks.push(text.slice(index, index + size));
    index += size;
  }
  return chunks;
}

async function convertDocxToAudio(filePath) {
  console.log(`Reading file: ${filePath}`);
  const fileBuffer = await fs.readFile(filePath);

  // Convert docx to plain text using mammoth
  const { value: text } = await mammoth.extractRawText({ buffer: fileBuffer });

  if (text.trim() === '') {
    throw new Error('No text found in the file');
  }

  console.log('Text extracted from file:', text);

  const textChunks = splitText(text, CHUNK_SIZE);
  const audioBuffers = [];

  for (const chunk of textChunks) {
    const request = {
      input: { text: chunk },
      voice: { languageCode: 'en-US', name: 'en-US-Journey-O', ssmlGender: 'FEMALE' },
      audioConfig: {
        audioEncoding: 'MP3',
        speakingRate: 0.88,
        pitch: 0.0,
        volumeGainDb: 0.0,
        sampleRateHertz: 24000,
        effectsProfileId: ['telephony-class-application'],
      },
    };

    const [response] = await client.synthesizeSpeech(request);
    audioBuffers.push(response.audioContent);
  }

  const outputFileName = path.basename(filePath, path.extname(filePath)) + '.mp3';
  const audioBuffer = Buffer.concat(audioBuffers.map(buffer => Buffer.from(buffer, 'binary')));
  await fs.writeFile(outputFileName, audioBuffer, 'binary');

  return outputFileName;
}

app.post('/convert', async (req, res) => {
  const { filePaths } = req.body;

  if (!Array.isArray(filePaths) || filePaths.length === 0) {
    return res.status(400).send('No file paths provided');
  }

  try {
    const results = [];

    for (const filePath of filePaths) {
      const audioFileName = await convertDocxToAudio(filePath);
      results.push({ filePath, audioFileName });
    }

    res.send({ message: 'Files processed successfully', results });
  } catch (error) {
    console.error('Error:', error);
    res.status(500).send(`Error processing files: ${error.message}`);
  }
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
