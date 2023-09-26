import express from 'express';
import { tiktokdl } from 'tiktokdl';
import morgan from 'morgan';

//============[ Settings ]=========\\
const app = express();
const port = 3000;

app.use(morgan('dev'))

//============[ Handler ]=========\\
const loghandler = {
noturl: {
		status: false,
		code: 406,
		error: 'Enter URL parameters!!',
	},
error: {
		status: false,
		code: 406,
		error: 'Internal server error!',
	}
}


//============[ Server ]=========\\
app.get('/', async (req, res) => {
  try {
    const baseUrl = `https://${req.hostname}`;
    const tiktok = `${baseUrl}/v1/tiktok/api?url=`;
    const resultJson = {
      endpoint: [
        { name: "tiktokdl", link: tiktok },
      ],
      status: true,
    };
    res.setHeader('Content-Type', 'application/json');
    res.send(JSON.stringify(resultJson));
  } catch (error) {
    res.setHeader('Content-Type', 'application/json');
    res.send(JSON.stringify({ status: "false", result: "Request failed!" }));
  }
});
//============[ Endpoint ]=========\\
app.get('/v1/tiktok/api', async (req, res, next) => {
	const url = req.query.url;
	if (!url) return res.json(loghandler.noturl)
	await tiktokdl(url)
		.then((result) => {
			res.json({
				status: true,
				code: 200,
				result
			})
		})
		.catch((error) => {
			res.json(loghandler.error)
		});
});

app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});