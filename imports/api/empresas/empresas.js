import { Mongo } from 'meteor/mongo';
import { Tracker } from 'meteor/tracker'
import SimpleSchema from 'simpl-schema';

import { validarCNPJ } from '../../utils.js'
import { FuncionariosSchema } from '../funcionarios/funcionarios'

let Empresas = new Mongo.Collection('empresas');

let EmpresaSchema = new SimpleSchema({
    razaoSocial : {
        type: String,
        min: 3
    },
    cnpj : {
        type: String,
        custom: function() {
            return validarCNPJ(this.value)
        }
    },
    cidade : {
        type: String,
        regEx: /^([^0-9]*)$/,
        min: 3
    },
    telefone : {
        type: String,
        regEx: /^[1-9]{2}\-[2-9][0-9]{7,8}$/,
    },
    funcionarios: {
        type: Array,
        required: false
    },
    'funcionarios.$': {
        type: FuncionariosSchema
    }
}, {tracker: Tracker});

Empresas.attachSchema(EmpresaSchema);

export default Empresas;
