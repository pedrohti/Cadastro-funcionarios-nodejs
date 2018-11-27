const app = require('./app/config/server');

app.listen(3000, '0.0.0.0', () => {
    console.log('Servidor rodando')
})

