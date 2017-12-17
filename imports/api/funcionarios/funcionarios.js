import { Tracker } from 'meteor/tracker';
import SimpleSchema from 'simpl-schema';

import { validarCPF } from '../../utils';

export const FuncionariosSchema = new SimpleSchema({
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
    ocorrencia: {
        type: Array,
        required: false
    },
    "ocorrencia.$": {
        type: Object
    },
    "ocorrencia.$.data": {
        type: Date
    },
    "ocorrencia.$.descricao": {
        type: String
    }
}, {tracker: Tracker});
