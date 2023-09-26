## Description
This is a server-side API for Tiktok downloader. It allows users to download videos from Tiktok by providing the URL of the video.

### [Demo](https://tiktokdl-api.vercel.app/)

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
   npm start
   ```
2. Access the API endpoint using the following format:
   ```
   GET /v1/tiktok/api?url=[URL_TIKTOK]
   ```
   Replace `[URL_TIKTOK]` with the actual URL of the Tiktok video you want to download.

## Response
The API will respond with a JSON object containing the download URL and other relevant information about the video.

Example response:
```
{
  "result": {
    "status": true,
    "title": "Example_Title",
    "thumbnail": "https://example.com/thumbnail.png",
    "video": "https://example.com/video.mp4"
  }
}
```

## Error Handling
If there is an error in the URL or the video is not available for download, the API will respond with a JSON object containing an error message.

Example error response:
```
{
  "success": false,
  "code": 406,
  "error": "Internal server error!"
}
```

## License
This project is licensed under the [MIT License](https://opensource.org/licenses/MIT).
