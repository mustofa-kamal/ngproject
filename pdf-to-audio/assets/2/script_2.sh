#!/bin/bash
magick -density 300 slide_21.svg slide_21.png
magick -density 300 slide_22.svg slide_22.png
magick -density 300 slide_23.svg slide_23.png
magick -density 300 slide_24.svg slide_24.png
magick -density 300 slide_25.svg slide_25.png
magick -density 300 slide_26.svg slide_26.png
magick -density 300 slide_27.svg slide_27.png
magick -density 300 slide_28.svg slide_28.png
magick -density 300 slide_29.svg slide_29.png

magick -density 300 slide_30.svg slide_30.png
magick -density 300 slide_31.svg slide_31.png
magick -density 300 slide_32.svg slide_32.png
magick -density 300 slide_33.svg slide_33.png
magick -density 300 slide_34.svg slide_34.png
magick -density 300 slide_35.svg slide_35.png
magick -density 300 slide_36.svg slide_36.png
magick -density 300 slide_37.svg slide_37.png
magick -density 300 slide_38.svg slide_38.png
magick -density 300 slide_39.svg slide_39.png

magick -density 300 slide_40.svg slide_40.png
magick -density 300 slide_41.svg slide_41.png
magick -density 300 slide_42.svg slide_42.png
magick -density 300 slide_43.svg slide_43.png
magick -density 300 slide_44.svg slide_44.png
magick -density 300 slide_45.svg slide_45.png
magick -density 300 slide_46.svg slide_46.png
magick -density 300 slide_47.svg slide_47.png
magick -density 300 slide_48.svg slide_48.png
magick -density 300 slide_49.svg slide_49.png

magick -density 300 slide_50.svg slide_50.png
magick -density 300 slide_51.svg slide_51.png
magick -density 300 slide_52.svg slide_52.png
magick -density 300 slide_53.svg slide_53.png
magick -density 300 slide_54.svg slide_54.png
magick -density 300 slide_55.svg slide_55.png
magick -density 300 slide_56.svg slide_56.png
magick -density 300 slide_57.svg slide_57.png
magick -density 300 slide_58.svg slide_58.png




ffmpeg -loop 1 -i slide_21.png -i slide_21.mp3 -vf "scale=trunc(iw/2)*2:trunc(ih/2)*2" -c:v libx264 -t 99 -pix_fmt yuv420p -c:a aac slide_21.mp4
ffmpeg -loop 1 -i slide_22.png -i slide_22.mp3 -vf "scale=trunc(iw/2)*2:trunc(ih/2)*2" -c:v libx264 -t 47 -pix_fmt yuv420p -c:a aac slide_22.mp4
ffmpeg -loop 1 -i slide_23.png -i slide_23.mp3 -vf "scale=trunc(iw/2)*2:trunc(ih/2)*2" -c:v libx264 -t 79 -pix_fmt yuv420p -c:a aac slide_23.mp4
ffmpeg -loop 1 -i slide_24.png -i slide_24.mp3 -vf "scale=trunc(iw/2)*2:trunc(ih/2)*2" -c:v libx264 -t 52 -pix_fmt yuv420p -c:a aac slide_24.mp4
ffmpeg -loop 1 -i slide_25.png -i slide_25.mp3 -vf "scale=trunc(iw/2)*2:trunc(ih/2)*2" -c:v libx264 -t 56 -pix_fmt yuv420p -c:a aac slide_25.mp4
ffmpeg -loop 1 -i slide_26.png -i slide_26.mp3 -vf "scale=trunc(iw/2)*2:trunc(ih/2)*2" -c:v libx264 -t 40 -pix_fmt yuv420p -c:a aac slide_26.mp4
ffmpeg -loop 1 -i slide_27.png -i slide_27.mp3 -vf "scale=trunc(iw/2)*2:trunc(ih/2)*2" -c:v libx264 -t 125 -pix_fmt yuv420p -c:a aac slide_27.mp4
ffmpeg -loop 1 -i slide_28.png -i slide_28.mp3 -vf "scale=trunc(iw/2)*2:trunc(ih/2)*2" -c:v libx264 -t 88 -pix_fmt yuv420p -c:a aac slide_28.mp4
ffmpeg -loop 1 -i slide_29.png -i slide_29.mp3 -vf "scale=trunc(iw/2)*2:trunc(ih/2)*2" -c:v libx264 -t 65 -pix_fmt yuv420p -c:a aac slide_29.mp4
ffmpeg -loop 1 -i slide_30.png -i slide_30.mp3 -vf "scale=trunc(iw/2)*2:trunc(ih/2)*2" -c:v libx264 -t 54 -pix_fmt yuv420p -c:a aac slide_30.mp4
ffmpeg -loop 1 -i slide_31.png -i slide_31.mp3 -vf "scale=trunc(iw/2)*2:trunc(ih/2)*2" -c:v libx264 -t 50 -pix_fmt yuv420p -c:a aac slide_31.mp4
ffmpeg -loop 1 -i slide_32.png -i slide_32.mp3 -vf "scale=trunc(iw/2)*2:trunc(ih/2)*2" -c:v libx264 -t 49 -pix_fmt yuv420p -c:a aac slide_32.mp4
ffmpeg -loop 1 -i slide_33.png -i slide_33.mp3 -vf "scale=trunc(iw/2)*2:trunc(ih/2)*2" -c:v libx264 -t 42 -pix_fmt yuv420p -c:a aac slide_33.mp4
ffmpeg -loop 1 -i slide_34.png -i slide_34.mp3 -vf "scale=trunc(iw/2)*2:trunc(ih/2)*2" -c:v libx264 -t 52 -pix_fmt yuv420p -c:a aac slide_34.mp4
ffmpeg -loop 1 -i slide_35.png -i slide_35.mp3 -vf "scale=trunc(iw/2)*2:trunc(ih/2)*2" -c:v libx264 -t 68 -pix_fmt yuv420p -c:a aac slide_35.mp4
ffmpeg -loop 1 -i slide_36.png -i slide_36.mp3 -vf "scale=trunc(iw/2)*2:trunc(ih/2)*2" -c:v libx264 -t 52 -pix_fmt yuv420p -c:a aac slide_36.mp4
ffmpeg -loop 1 -i slide_37.png -i slide_37.mp3 -vf "scale=trunc(iw/2)*2:trunc(ih/2)*2" -c:v libx264 -t 77 -pix_fmt yuv420p -c:a aac slide_37.mp4
ffmpeg -loop 1 -i slide_38.png -i slide_38.mp3 -vf "scale=trunc(iw/2)*2:trunc(ih/2)*2" -c:v libx264 -t 95 -pix_fmt yuv420p -c:a aac slide_38.mp4
ffmpeg -loop 1 -i slide_39.png -i slide_39.mp3 -vf "scale=trunc(iw/2)*2:trunc(ih/2)*2" -c:v libx264 -t 110 -pix_fmt yuv420p -c:a aac slide_39.mp4

ffmpeg -loop 1 -i slide_40.png -i slide_40.mp3 -vf "scale=trunc(iw/2)*2:trunc(ih/2)*2" -c:v libx264 -t 53 -pix_fmt yuv420p -c:a aac slide_40.mp4
ffmpeg -loop 1 -i slide_41.png -i slide_41.mp3 -vf "scale=trunc(iw/2)*2:trunc(ih/2)*2" -c:v libx264 -t 84 -pix_fmt yuv420p -c:a aac slide_41.mp4
ffmpeg -loop 1 -i slide_42.png -i slide_42.mp3 -vf "scale=trunc(iw/2)*2:trunc(ih/2)*2" -c:v libx264 -t 84 -pix_fmt yuv420p -c:a aac slide_42.mp4
ffmpeg -loop 1 -i slide_43.png -i slide_43.mp3 -vf "scale=trunc(iw/2)*2:trunc(ih/2)*2" -c:v libx264 -t 55 -pix_fmt yuv420p -c:a aac slide_43.mp4
ffmpeg -loop 1 -i slide_44.png -i slide_44.mp3 -vf "scale=trunc(iw/2)*2:trunc(ih/2)*2" -c:v libx264 -t 102 -pix_fmt yuv420p -c:a aac slide_44.mp4
ffmpeg -loop 1 -i slide_45.png -i slide_45.mp3 -vf "scale=trunc(iw/2)*2:trunc(ih/2)*2" -c:v libx264 -t 79 -pix_fmt yuv420p -c:a aac slide_45.mp4
ffmpeg -loop 1 -i slide_46.png -i slide_46.mp3 -vf "scale=trunc(iw/2)*2:trunc(ih/2)*2" -c:v libx264 -t 93 -pix_fmt yuv420p -c:a aac slide_46.mp4
ffmpeg -loop 1 -i slide_47.png -i slide_47.mp3 -vf "scale=trunc(iw/2)*2:trunc(ih/2)*2" -c:v libx264 -t 78 -pix_fmt yuv420p -c:a aac slide_47.mp4
ffmpeg -loop 1 -i slide_48.png -i slide_48.mp3 -vf "scale=trunc(iw/2)*2:trunc(ih/2)*2" -c:v libx264 -t 115 -pix_fmt yuv420p -c:a aac slide_48.mp4
ffmpeg -loop 1 -i slide_49.png -i slide_49.mp3 -vf "scale=trunc(iw/2)*2:trunc(ih/2)*2" -c:v libx264 -t 116 -pix_fmt yuv420p -c:a aac slide_49.mp4

ffmpeg -loop 1 -i slide_50.png -i slide_50.mp3 -vf "scale=trunc(iw/2)*2:trunc(ih/2)*2" -c:v libx264 -t 81 -pix_fmt yuv420p -c:a aac slide_50.mp4
ffmpeg -loop 1 -i slide_51.png -i slide_51.mp3 -vf "scale=trunc(iw/2)*2:trunc(ih/2)*2" -c:v libx264 -t 84 -pix_fmt yuv420p -c:a aac slide_51.mp4
ffmpeg -loop 1 -i slide_52.png -i slide_52.mp3 -vf "scale=trunc(iw/2)*2:trunc(ih/2)*2" -c:v libx264 -t 81 -pix_fmt yuv420p -c:a aac slide_52.mp4
ffmpeg -loop 1 -i slide_53.png -i slide_53.mp3 -vf "scale=trunc(iw/2)*2:trunc(ih/2)*2" -c:v libx264 -t 87 -pix_fmt yuv420p -c:a aac slide_53.mp4
ffmpeg -loop 1 -i slide_54.png -i slide_54.mp3 -vf "scale=trunc(iw/2)*2:trunc(ih/2)*2" -c:v libx264 -t 89 -pix_fmt yuv420p -c:a aac slide_54.mp4
ffmpeg -loop 1 -i slide_55.png -i slide_55.mp3 -vf "scale=trunc(iw/2)*2:trunc(ih/2)*2" -c:v libx264 -t 87 -pix_fmt yuv420p -c:a aac slide_55.mp4
ffmpeg -loop 1 -i slide_56.png -i slide_56.mp3 -vf "scale=trunc(iw/2)*2:trunc(ih/2)*2" -c:v libx264 -t 81 -pix_fmt yuv420p -c:a aac slide_56.mp4
ffmpeg -loop 1 -i slide_57.png -i slide_57.mp3 -vf "scale=trunc(iw/2)*2:trunc(ih/2)*2" -c:v libx264 -t 99 -pix_fmt yuv420p -c:a aac slide_57.mp4
ffmpeg -loop 1 -i slide_58.png -i slide_58.mp3 -vf "scale=trunc(iw/2)*2:trunc(ih/2)*2" -c:v libx264 -t 47 -pix_fmt yuv420p -c:a aac slide_58.mp4



echo "file 'slide_21.mp4'" > filelist.txt
echo "file 'slide_22.mp4'" >> filelist.txt
echo "file 'slide_23.mp4'" >> filelist.txt
echo "file 'slide_24.mp4'" >> filelist.txt
echo "file 'slide_25.mp4'" >> filelist.txt
echo "file 'slide_26.mp4'" >> filelist.txt
echo "file 'slide_27.mp4'" >> filelist.txt
echo "file 'slide_28.mp4'" >> filelist.txt
echo "file 'slide_29.mp4'" >> filelist.txt
echo "file 'slide_30.mp4'" >> filelist.txt
echo "file 'slide_31.mp4'" >> filelist.txt
echo "file 'slide_32.mp4'" >> filelist.txt
echo "file 'slide_33.mp4'" >> filelist.txt
echo "file 'slide_34.mp4'" >> filelist.txt
echo "file 'slide_35.mp4'" >> filelist.txt
echo "file 'slide_36.mp4'" >> filelist.txt
echo "file 'slide_37.mp4'" >> filelist.txt
echo "file 'slide_38.mp4'" >> filelist.txt
echo "file 'slide_39.mp4'" >> filelist.txt
echo "file 'slide_40.mp4'" >> filelist.txt

echo "file 'slide_41.mp4'" >> filelist.txt
echo "file 'slide_42.mp4'" >> filelist.txt
echo "file 'slide_43.mp4'" >> filelist.txt
echo "file 'slide_44.mp4'" >> filelist.txt
echo "file 'slide_45.mp4'" >> filelist.txt
echo "file 'slide_46.mp4'" >> filelist.txt
echo "file 'slide_47.mp4'" >> filelist.txt
echo "file 'slide_48.mp4'" >> filelist.txt
echo "file 'slide_49.mp4'" >> filelist.txt
echo "file 'slide_50.mp4'" >> filelist.txt
echo "file 'slide_51.mp4'" >> filelist.txt
echo "file 'slide_52.mp4'" >> filelist.txt
echo "file 'slide_53.mp4'" >> filelist.txt
echo "file 'slide_54.mp4'" >> filelist.txt
echo "file 'slide_55.mp4'" >> filelist.txt
echo "file 'slide_56.mp4'" >> filelist.txt
echo "file 'slide_57.mp4'" >> filelist.txt
echo "file 'slide_58.mp4'" >> filelist.txt



ffmpeg -f concat -safe 0 -i filelist.txt -c copy chapter_1_2.mp4
