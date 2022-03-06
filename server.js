const Vue = require('vue');
const VueServerRenderer = require('vue-server-renderer');
const Koa = require('koa');
const Router = require('@koa/router');
const fs = require('fs');
const path = require('path');
const static = require('koa-static');

const app = new Koa();
const router = new Router();

// const serverBundle = fs.readFileSync(path.resolve(__dirname, 'dist/server.bundle.js'), 'utf8');
// const render = VueServerRenderer.createBundleRenderer(serverBundle, { template });

const serverBundle = require('./dist/vue-ssr-server-bundle.json');
const template = fs.readFileSync(path.resolve(__dirname, 'dist/index.ssr.html'), 'utf8');
const clientManifest = require('./dist/vue-ssr-client-manifest.json')
const render = VueServerRenderer.createBundleRenderer(serverBundle, {
    template,
    clientManifest
});

router.get('/(.*)', async(ctx) => {
    //客户端=template+编译的结果=组成的Html
    //在我们渲染页面的时候，需要让服务器根据当前的路径渲染对应的路由
    try {
        ctx.body = await render.renderToString({ url: ctx.url });
    } catch (err) {
        if (err.code == 404) {
            ctx.body = 'page not found';
        }
    }

});
//先匹配静态资源，资源找不到再找对应的api
app.use(static(path.resolve(__dirname, 'dist')));
app.use(router.routes());

app.listen(3000);