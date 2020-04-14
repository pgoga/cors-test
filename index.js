var Koa = require('koa')
var Router = require('koa-router')
const koaBody = require('koa-body')
const cors = require('@koa/cors')

async function start(){

  var app = new Koa()
  var router = new Router()

  app
    .use(cors({ 'Access-Control-Allow-Origin': '*' }))
    .use(koaBody())
    .use(router.routes())
    .use(router.allowedMethods())


  router.get('/', async (ctx, next) => {
    ctx.response.body = {get:'ok'}
  })


  router.post('/', async (ctx, next) => {
    ctx.response.body = {'post':'ok'}
  })

  router.get('/404', async (ctx, next) => {
    ctx.response.body = {'get':'404'}
    ctx.response.status = 404
  })


  router.post('/404', async (ctx, next) => {
    ctx.response.body = {'post':'404'}
    ctx.response.status = 404
  })


  console.log("API server has started")
  app.listen(3000)
}

start().then()
