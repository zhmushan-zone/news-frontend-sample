import * as koa from 'koa'
import * as koaBodyparser from 'koa-bodyparser'
import * as koaStatic from 'koa-static'
import { router } from 'app/routes'
import * as path from 'path'

const app = new koa()
app.use(koaStatic(path.join(__dirname, '../public')))
app.use(koaBodyparser())
app.use(router.routes())
app.listen(3000)
