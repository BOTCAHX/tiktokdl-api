process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0'

Koa = require 'koa'
Router = require 'koa-router'
bodyParser = require 'koa-bodyparser'
serve = require 'koa-static'
logger = require 'koa-logger'
responseTime = require 'koa-response-time'
ratelimit = require 'koa-ratelimit'
scraper = require 'btch-downloader'

app = new Koa()
router = new Router()
port = process.env.PORT or 3000

app.use serve 'public'
app.use logger()
app.use responseTime()
app.use bodyParser()

app.use ratelimit
  driver: 'memory'
  db: new Map()
  duration: 1000 * 55
  errorMessage:
    ok: false
    error:
      code: 429
      message: 'Rate limit exceeded. See "Retry-After"'
  id: (ctx) -> ctx.ip
  headers:
    remaining: 'Rate-Limit-Remaining'
    reset: 'Rate-Limit-Reset'
    total: 'Rate-Limit-Total'
  max: 100

router.get '/tiktok/api.php', (ctx) ->
  urls = ctx.request.query.url
  scraper.ttdl(urls).then (result) ->
    { audio, video } = result
    ctx.body = { audio, video }
  .catch (error) ->
    ctx.status = 500
    ctx.body = { error: 'Internal server error' }

app.use router.routes()

app.listen port, ->
  console.log "Server started on - http://localhost:#{port}"
  console.log "Port - #{port}"
  
