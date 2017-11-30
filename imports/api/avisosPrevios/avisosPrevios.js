import { Mongo } from 'meteor/mongo';
import { Tracker } from 'meteor/tracker'
import SimpleSchema from 'simpl-schema';

let AvisosPrevios = new Mongo.Collection('AvisosPrevios');

let AvisosPrevioschema = new SimpleSchema({
    codigo : {
        type : number
    },
    funcionario : { // Como colocar funcionario?
        type : String
    },
    dataDoDocumento : {
        type : number
    },
    dataDeRescisaoDoFuncionario : {
        type : number
    },
    motivoDaRescisao : {
        type : String
    }
}, {tracker: Tracker});

AvisosPrevios.attachSchema(AvisosPrevioschema);

export default AvisosPrevios;