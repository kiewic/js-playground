# Converting videos using ffmpeg

Use following command to:

* Convert from MOV to MP4
* Remove audio (`-an`)
* Scale down the video (`-vf "scale=iw/3:ih/3"` or `-vf "scale=iw/4:ih/4"`)
* Select the start position (`ss`)
* Set duration (`t`)

```
./ffmpeg -i input.mov -an -vf "scale=iw/3:ih/3" -ss 00:00:05 -t 00:00:18 a_third_the_frame_size.mp4
```

# Increase audio volume on an MP4

It seems to only work with mp4 (at least it is not working with .mov).

```
./ffmpeg -i input.mp4 -c:v copy -af "volume=8" output.mp4
```
