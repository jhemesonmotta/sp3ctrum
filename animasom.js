var middleware = require('../auth/middleware');
var express = require('express');
var router = express.Router();

var Resultado = require('../config/models/modelResultadoAnimasom');

router.get('/', function(req, res, next) {
  res.send('respond with all data from Animasom game');
});

router.get('/players', function(req, res, next) {
    res.send('respond with all players from Animasom game');
});
router.post('/result', function(req, res){
    var resultado = req.body;
	console.log("req:");
	console.log(req.body);
    var toSave = new Resultado({
        idJogador: resultado.idJogador, 
        idClinica: resultado.idClinica,
        ambiente: resultado.ambiente,
        tempoDesafio1: resultado.tempoDesafio1,
        tempoDesafio2: resultado.tempoDesafio2,
        tempoDesafio3: resultado.tempoDesafio3,
        qtdAcertos: resultado.qtdAcertos,
        qtdErros: resultado.qtdErros,
        qtdClicksAnimal1: resultado.qtdClicksAnimal1,
        qtdClicksAnimal2: resultado.qtdClicksAnimal2,
        qtdClicksAnimal3: resultado.qtdClicksAnimal3,
        qtdClicksPos1: resultado.qtdClicksPos1,
        qtdClicksPos2: resultado.qtdClicksPos2,
        qtdClicksPos3: resultado.qtdClicksPos3,
        data: resultado.data
    });

    toSave.save(function(err){
        if(err) console.log(err);
        console.log("Resultado salvo com sucesso!");
    });
       
    res.send('Resultado enviado!');
});

router.get('/results', function(req, res){
    Resultado.find({}, function(err, resultados){
        if(err) console.log(err);
    
        res.send(resultados);
        console.log("resultados: ");
        console.log(resultados);
    });
    
});


module.exports = router;