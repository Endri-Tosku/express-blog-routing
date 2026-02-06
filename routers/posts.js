// richiamo istanza di framework Express
const express = require('express')
// creiamo un istanza dell'oggetto rotte di Express
const routers = express.Router();

// rotte CRUD
// index
routers.get('/', function (req, res) {
    res.send('Lista dei posts');
});

// show
routers.get('/:id', function (req, res) {
    res.send('Dettagli della post ' + req.params.id);
});

// Create
routers.post('/', function (req, res) {
    res.send('Creazione nuova post');
});

// Update 
routers.put('/:id', function (req, res) {
    res.send('Modifica integrale della post ' + req.params.id);
});

// Delete 
routers.delete('/:id', function (req, res) {
    res.send('Eliminazione della post ' + req.params.id);
});

// esporta l'istanza di queste rotte
module.exports = routers;