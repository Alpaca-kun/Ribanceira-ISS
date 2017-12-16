import { Mongo } from 'meteor/mongo';
import { Tracker } from 'meteor/tracker';
import SimpleSchema from 'simpl-schema';

let Empresas = new Mongo.Collection('empresas');

let EmpresaSchema = new SimpleSchema({
    razaoSocial : {
        type: String
    },
    cnpj : {
        type: String
    }
}, {tracker: Tracker});

Empresas.attachSchema(EmpresaSchema);

export default Empresas;
