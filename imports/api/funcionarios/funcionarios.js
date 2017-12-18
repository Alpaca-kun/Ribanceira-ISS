import { Mongo } from 'meteor/mongo';
import { Tracker } from 'meteor/tracker';
import SimpleSchema from 'simpl-schema';

import { validarCPF } from '../../utils';

let Funcionarios = new Mongo.Collection('funcionarios');

let FuncionariosSchema = new SimpleSchema({
    nome: {
        type: String,
        min: 3
    },
    cpf: {
        type: String,
        custom: function() {
            return validarCPF(this.value)
        }
    },
    salario : {
        type: Number,
        min: 0
    },
    sindicato: {
        type: String
    },
    empresa: {
        type: String
    },
    horas: {
        type: Array,
        defaultValue: []
    },
    "horas.$": {
        type: Object
    },
    "horas.$.ano": {
        type: Number
    },
    "horas.$.mes": {
        type: Number
    },
    "horas.$.horas": {
        type: Number
    }
}, {tracker: Tracker});

Funcionarios.attachSchema(FuncionariosSchema);

export default Funcionarios;
