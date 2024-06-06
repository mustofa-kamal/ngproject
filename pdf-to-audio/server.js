const express = require('express');
const bodyParser = require('body-parser');
const textToSpeech = require('@google-cloud/text-to-speech');
const fs = require('fs').promises;
const path = require('path');
const pdf = require('pdf-parse');

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

app.post('/convert', async (req, res) => {
  const { filePath } = req.body;

  try {
    console.log(`Reading file: ${filePath}`);
    const data = await fs.readFile(filePath);
    const pdfData = await pdf(data);
    const text = pdfData.text;

    if (text.trim() === '') {
      console.error('No text found in the PDF');
      return res.status(400).send('No text found in the PDF');
    }

    console.log('Text extracted from PDF:', text);

    const textChunks = splitText(text, CHUNK_SIZE);
    const audioBuffers = [];

    for (const chunk of textChunks) {
      const request = {
        input: { text: chunk },
        voice: { languageCode: 'en-US', ssmlGender: 'FEMALE' },
        audioConfig: { audioEncoding: 'MP3' },
      };

      const [response] = await client.synthesizeSpeech(request);
      audioBuffers.push(response.audioContent);
    }

    const outputFileName = path.basename(filePath, path.extname(filePath)) + '.mp3';
    const audioBuffer = Buffer.concat(audioBuffers.map(buffer => Buffer.from(buffer, 'binary')));
    await fs.writeFile(outputFileName, audioBuffer, 'binary');

    res.send({ message: `Audio content written to file: ${outputFileName}` });
  } catch (error) {
    console.error('Error:', error);
    res.status(500).send(`Error converting PDF to audio: ${error.message}`);
  }
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
