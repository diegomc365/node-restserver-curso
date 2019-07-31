require('./config/config');

const express = require('express');
const app = express();
const bodyParser = require('body-parser');

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

app.get('/', function(req, res) {
    res.json('Hello World');
});

app.get('/usuario', function(req, res) {
    res.json('Get Usuario');
});

app.post('/usuario', function(req, res) {

    let body = req.body;

    if (body.nombre === undefined) {

        res.status(400).json({
            ok: false,
            mensaje: 'El nombre es necesario'
        });

    } else {
        res.json({
            body
        });
    }

});

// con dos puntos se indica el parametro (params)
app.put('/usuario/:id', function(req, res) {
    let id = req.params.id;

    res.json({
        id
    });
});
app.delete('/usuario', function(req, res) {
    res.json('Delete Usuario');
});

// app.listen(3000, () => {
//     console.log('Escuchando puerto: ', 3000);
// });
//se usa asi cuando configuro mi puerto global
app.listen(process.env.PORT, () => {
    console.log('Escuchando puerto: ', process.env.PORT);
});