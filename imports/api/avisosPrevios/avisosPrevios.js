import { Mongo } from 'meteor/mongo';
import { Tracker } from 'meteor/tracker'
import SimpleSchema from 'simpl-schema';

let AvisosPrevios = new Mongo.Collection('AvisosPrevios');

let AvisosPrevioschema = new SimpleSchema({
    codigo : {
        type : Number
    },
      funcionario : { 
        type : String // Buscar por ID, melhorar posteriormente
    },
    dataDoDocumento : {
        type : Date
    },
    dataDeRescisaoDoFuncionario : {
        type : Date
    },
    motivoDaRescisao : {
        type : String
    }
}, {tracker: Tracker});

AvisosPrevios.attachSchema(AvisosPrevioschema);

export default AvisosPrevios;
