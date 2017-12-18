const mongodb = "mongodb://sandbox.ulbra-to.br:27017/spectrum";
var mongoose = require('mongoose');
mongoose.connect(mongodb, {
    useMongoClient: true
});

var Schema = mongoose.Schema,
ObjectId = Schema.ObjectId;

var resultadoAnimasomSchema = new Schema({
    // _id: ObjectId,
    idJogador: Number,
    idClinica: Number,
    ambiente: String,
    tempoDesafio1:Number,
    tempoDesafio2:Number,
    tempoDesafio3:Number,
    qtdAcertos:Number,
    qtdErros:Number,
    qtdClicksAnimal1:Number,
    qtdClicksAnimal2:Number,
    qtdClicksAnimal3:Number,
    qtdClicksPos1:Number,
    qtdClicksPos2:Number,
    qtdClicksPos3:Number,
    data: String
});

var ResultadoAnimasomModel = mongoose.model("ResultadoAnimasom", resultadoAnimasomSchema);
module.exports = ResultadoAnimasomModel;


