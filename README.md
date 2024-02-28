## Description
This is a server-side API for Tiktok downloader. It allows users to download videos from Tiktok by providing the URL of the video.


## Installation
1. Clone the repository:
   ```
   git clone https://github.com/BOTCAHX/tiktokdl-api
   ```
2. Open files
   ```
   cd tiktokdl-api
   ```   
3. Install the dependencies:
   ```
   npm install
   ```

## Usage
1. Start the server:
   ```
   node index.js
   ```
2. Access the API endpoint using the following format:
   ```
   GET /tiktok/api.php?url=[URL_TIKTOK]
   ```
   Replace `[URL_TIKTOK]` with the actual URL of the Tiktok video you want to download.

## Response
The API will respond with a JSON object containing the download URL and other relevant information about the video.

Example response:
```
{
  "audio": [
    "https://www.tikwm.com/video/music/6990916139345808666.mp3"
  ],
  "video": [
    "https://www.tikwm.com/video/media/play/6990916139345808666.mp4"
  ]
}
```

## Error Handling
If there is an error in the URL or the video is not available for download, the API will respond with a server error.

## License
This project is licensed under the [MIT License](https://opensource.org/licenses/MIT).
