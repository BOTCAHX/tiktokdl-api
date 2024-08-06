---

## Description
This is a server-side API for downloading TikTok videos. It allows users to download videos from TikTok by providing the URL of the video.

## Installation
1. **Clone the repository:**
   ```bash
   git clone https://github.com/BOTCAHX/tiktokdl-api
   ```
2. **Navigate into the project directory:**
   ```bash
   cd tiktokdl-api
   ```
3. **Install dependencies:**
   ```bash
   npm install
   ```
4. **Install CoffeeScript globally (if not already installed):**
   ```bash
   npm install -g coffeescript
   ```
5. **Compile the CoffeeScript file:**
   ```bash
   coffee -c index.coffee
   ```

## Usage
1. **Start the server using one of the following commands, depending on your setup:**
   - **If using JavaScript:**
     ```bash
     node index.js
     ```
   - **If using CoffeeScript:**
     ```bash
     coffee app.coffee
     ```

2. **Access the API endpoint with the following format:**
   ```http
   GET /tiktok/api.php?url=[URL_TIKTOK]
   ```
   Replace `[URL_TIKTOK]` with the actual URL of the TikTok video you want to download.

## Response
The API will respond with a JSON object containing the download URL and other relevant information about the video.

**Example response:**
```json
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
If there is an error with the URL or if the video is not available for download, the API will respond with a server error.

## License
This project is licensed under the [MIT License](https://opensource.org/licenses/MIT).

---
