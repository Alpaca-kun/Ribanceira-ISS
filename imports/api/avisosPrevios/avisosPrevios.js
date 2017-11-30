import { Mongo } from 'meteor/mongo';
import { Tracker } from 'meteor/tracker'
import SimpleSchema from 'simpl-schema';
import { strictEqual } from 'assert';

let AvisoPrevio = new Mongo.Collection('AvisoPrevio');

let AvisoPreviochema = new SimpleSchema({
    codigo : {
        type : number
    },
    funcionario : {
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

AvisoPrevio.attachSchema(AvisoPreviochema);

export default AvisoPrevio;