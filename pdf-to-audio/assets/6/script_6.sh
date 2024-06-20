#!/bin/bash
magick -density 300 slide_1.svg slide_1.png
magick -density 300 slide_2.svg slide_2.png
magick -density 300 slide_3.svg slide_3.png
magick -density 300 slide_4.svg slide_4.png
magick -density 300 slide_5.svg slide_5.png
magick -density 300 slide_6.svg slide_6.png
magick -density 300 slide_7.svg slide_7.png
magick -density 300 slide_8.svg slide_8.png
magick -density 300 slide_9.svg slide_9.png
magick -density 300 slide_10.svg slide_10.png
magick -density 300 slide_11.svg slide_11.png
magick -density 300 slide_12.svg slide_12.png
magick -density 300 slide_13.svg slide_13.png
magick -density 300 slide_14.svg slide_14.png
magick -density 300 slide_15.svg slide_15.png







ffmpeg -loop 1 -i slide_1.png -i slide_1.mp3 -vf "scale=trunc(iw/2)*2:trunc(ih/2)*2" -c:v libx264 -t 76 -pix_fmt yuv420p -c:a aac slide_1.mp4
ffmpeg -loop 1 -i slide_2.png -i slide_2.mp3 -vf "scale=trunc(iw/2)*2:trunc(ih/2)*2" -c:v libx264 -t 101 -pix_fmt yuv420p -c:a aac slide_2.mp4
ffmpeg -loop 1 -i slide_3.png -i slide_3.mp3 -vf "scale=trunc(iw/2)*2:trunc(ih/2)*2" -c:v libx264 -t 86 -pix_fmt yuv420p -c:a aac slide_3.mp4
ffmpeg -loop 1 -i slide_4.png -i slide_4.mp3 -vf "scale=trunc(iw/2)*2:trunc(ih/2)*2" -c:v libx264 -t 85 -pix_fmt yuv420p -c:a aac slide_4.mp4
ffmpeg -loop 1 -i slide_5.png -i slide_5.mp3 -vf "scale=trunc(iw/2)*2:trunc(ih/2)*2" -c:v libx264 -t 90 -pix_fmt yuv420p -c:a aac slide_5.mp4
ffmpeg -loop 1 -i slide_6.png -i slide_6.mp3 -vf "scale=trunc(iw/2)*2:trunc(ih/2)*2" -c:v libx264 -t 94 -pix_fmt yuv420p -c:a aac slide_6.mp4
ffmpeg -loop 1 -i slide_7.png -i slide_7.mp3 -vf "scale=trunc(iw/2)*2:trunc(ih/2)*2" -c:v libx264 -t 97 -pix_fmt yuv420p -c:a aac slide_7.mp4
ffmpeg -loop 1 -i slide_8.png -i slide_8.mp3 -vf "scale=trunc(iw/2)*2:trunc(ih/2)*2" -c:v libx264 -t 36 -pix_fmt yuv420p -c:a aac slide_8.mp4
ffmpeg -loop 1 -i slide_9.png -i slide_9.mp3 -vf "scale=trunc(iw/2)*2:trunc(ih/2)*2" -c:v libx264 -t 75 -pix_fmt yuv420p -c:a aac slide_9.mp4
ffmpeg -loop 1 -i slide_10.png -i slide_10.mp3 -vf "scale=trunc(iw/2)*2:trunc(ih/2)*2" -c:v libx264 -t 39 -pix_fmt yuv420p -c:a aac slide_10.mp4
ffmpeg -loop 1 -i slide_11.png -i slide_11.mp3 -vf "scale=trunc(iw/2)*2:trunc(ih/2)*2" -c:v libx264 -t 79 -pix_fmt yuv420p -c:a aac slide_11.mp4
ffmpeg -loop 1 -i slide_12.png -i slide_12.mp3 -vf "scale=trunc(iw/2)*2:trunc(ih/2)*2" -c:v libx264 -t 101 -pix_fmt yuv420p -c:a aac slide_12.mp4
ffmpeg -loop 1 -i slide_13.png -i slide_13.mp3 -vf "scale=trunc(iw/2)*2:trunc(ih/2)*2" -c:v libx264 -t 18 -pix_fmt yuv420p -c:a aac slide_13.mp4
ffmpeg -loop 1 -i slide_14.png -i slide_14.mp3 -vf "scale=trunc(iw/2)*2:trunc(ih/2)*2" -c:v libx264 -t 95 -pix_fmt yuv420p -c:a aac slide_14.mp4
ffmpeg -loop 1 -i slide_15.png -i slide_15.mp3 -vf "scale=trunc(iw/2)*2:trunc(ih/2)*2" -c:v libx264 -t 52 -pix_fmt yuv420p -c:a aac slide_15.mp4


echo "file 'slide_1.mp4'" > filelist.txt
echo "file 'slide_2.mp4'" >> filelist.txt
echo "file 'slide_3.mp4'" >> filelist.txt
echo "file 'slide_4.mp4'" >> filelist.txt
echo "file 'slide_5.mp4'" >> filelist.txt
echo "file 'slide_6.mp4'" >> filelist.txt
echo "file 'slide_7.mp4'" >> filelist.txt
echo "file 'slide_8.mp4'" >> filelist.txt
echo "file 'slide_9.mp4'" >> filelist.txt
echo "file 'slide_10.mp4'" >> filelist.txt
echo "file 'slide_11.mp4'" >> filelist.txt
echo "file 'slide_12.mp4'" >> filelist.txt
echo "file 'slide_13.mp4'" >> filelist.txt
echo "file 'slide_14.mp4'" >> filelist.txt
echo "file 'slide_15.mp4'" >> filelist.txt




ffmpeg -f concat -safe 0 -i filelist.txt -c copy tafsir_sura_fatihah_6.mp4
