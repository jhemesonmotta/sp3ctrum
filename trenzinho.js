var middleware = require('../auth/middleware');
var express = require('express');
var router = express.Router();

var Resultado = require('../config/models/modelResultadoTrenzinho');

router.get('/', function(req, res, next) {
  res.send('respond with all data from Trenzinho Pi game');
});

router.get('/players', function(req, res, next) {
    res.send('respond with all players from Trenzinho Pi game');
});
router.post('/result', function(req, res){
    var resultado = req.body;
    var toSave = new Resultado({
        idJogador: resultado.idJogador, 
        idClinica: resultado.idClinica,
        cenario: resultado.cenario,
        palavra: resultado.palavra,
        qtdLetrasPalavra: resultado.qtdLetrasPalavra,
        tempoDesafio: resultado.tempoDesafio,
        qtdAcertos: resultado.qtdAcertos,
        qtdErros: resultado.qtdErros,
        qtdDropLetra1: resultado.qtdDropLetra1,
        qtdDropLetra2: resultado.qtdDropLetra2,
        qtdDropLetra3: resultado.qtdDropLetra3,
        qtdDropLetra4: resultado.qtdDropLetra4,
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