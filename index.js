process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';
import Koa from 'koa';
import Router from 'koa-router';
import bodyParser from 'koa-bodyparser';
import serve from 'koa-static';
import logger from 'koa-logger';
import responseTime from 'koa-response-time';
import ratelimit from 'koa-ratelimit';
import scraper from 'btch-downloader';

const app = new Koa();
const router = new Router();
const port = process.env.PORT || 3000;

app.use(serve('public'));
app.use(logger());
app.use(responseTime());
app.use(bodyParser());

app.use(
  ratelimit({
    driver: 'memory',
    db: new Map(),
    duration: 1000 * 55,
    errorMessage: {
      ok: false,
      error: {
        code: 429,
        message: 'Rate limit exceeded. See "Retry-After"'
      }
    },
    id: (ctx) => ctx.ip,
    headers: {
      remaining: 'Rate-Limit-Remaining',
      reset: 'Rate-Limit-Reset',
      total: 'Rate-Limit-Total'
    },
    max: 100
  })
);

router.get('/tiktok/api.php', async (ctx) => {
  let urls = ctx.request.query.url;
  let { audio, video } = await scraper.ttdl(urls);
  ctx.body = { audio, video };
});

app.use(router.routes());

app.listen(port, () => {
  console.log(`Server started on - http://localhost:${port}`);
  console.log(`Port - ${port}`);
});
