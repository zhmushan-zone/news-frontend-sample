import * as koa from 'koa'
import * as koaBodyparser from 'koa-bodyparser'
import { router } from './app/routes'

const app = new koa()
app.use(koaBodyparser())
app.use(router.routes())
app.listen(3000)
