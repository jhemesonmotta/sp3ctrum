const mongodb = "mongodb://sandbox.ulbra-to.br:27017/spectrum";
var mongoose = require('mongoose');
mongoose.connect(mongodb, {
    useMongoClient: true
});

var Schema = mongoose.Schema,
ObjectId = Schema.ObjectId;

var resultadoTrenzinhoSchema = new Schema({
    // _id: ObjectId,
    idJogador: Number,
    idClinica: Number,
    cenario: String,
    palavra: String,
    qtdLetrasPalavra:Number,
    tempoDesafio:Number,
    qtdAcertos:Number,
    qtdErros:Number,
    qtdDropLetra1:Number,
    qtdDropLetra2:Number,
    qtdDropLetra3:Number,
    qtdDropLetra4:Number,
    data: String
});

var ResultadoTrenzinhoModel = mongoose.model("ResultadoTrenzinho", resultadoTrenzinhoSchema);
module.exports = ResultadoTrenzinhoModel;


