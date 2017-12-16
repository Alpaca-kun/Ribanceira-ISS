import { Mongo } from 'meteor/mongo';
import { Tracker } from 'meteor/tracker';
import SimpleSchema from 'simpl-schema';

let Sindicatos = new Mongo.Collection('sindicatos');

let SindicatoSchema = new SimpleSchema({
    nome : {
        type : String 
    },
    ramoDeAtividade : {
        type : String   
    },
    endereco : {
        type : String
    },
    telefone : {
        type : Number 
    }
}, {tracker: Tracker});

Sindicatos.attachSchema(SindicatoSchema);

export default Sindicatos;
