//vue vue-server-render
const Vue = require('vue');
const VueServerRenderer = require('vue-server-renderer');
const fs = require('fs');
const path = require('path');

const vm = new Vue({
    data() {
        return {
            name: 'zf',
            age: 10
        }
    },
    template: `<div>{{name}}今年{{age}}岁了</div>`
})

const Koa = require('koa');
const Router = require('@koa/router');
const template = fs.readFileSync(path.resolve(__dirname, 'index.html'), 'utf8');
const render = VueServerRenderer.createRenderer({ template });

let app = new Koa();
let router = new Router();

router.get('/', async(ctx) => {
    ctx.body = await render.renderToString(vm);
});

app.use(router.routes());
app.listen(3000);