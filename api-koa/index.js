const Koa = require('koa');
const bodyParser = require('koa-bodyparser');
const app = new Koa();


app.use(bodyParser());

app.use(ctx => {
    if (ctx.path == '/') {
        ctx.body = 'Bienvenido a la API con Koa';
    }
});

app.listen(3000, () => console.log('API de Koa corriendo en puerto 3000'));