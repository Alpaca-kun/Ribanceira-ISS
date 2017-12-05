import { Mongo } from 'meteor/mongo';
import { Tracker } from 'meteor/tracker'
import SimpleSchema from 'simpl-schema';

let AvisosPrevios = new Mongo.Collection('AvisosPrevios');

let AvisosPrevioschema = new SimpleSchema({
    codigo : {
        type : Number
    },
      funcionario : { 
        type : Number // Buscar por ID, melhorar posteriormente
    },
    dataDoDocumento : {
        type : Number
    },
    dataDeRescisaoDoFuncionario : {
        type : Number
    },
    motivoDaRescisao : {
        type : String
    }
}, {tracker: Tracker});

AvisosPrevios.attachSchema(AvisosPrevioschema);

export default AvisosPrevios;
