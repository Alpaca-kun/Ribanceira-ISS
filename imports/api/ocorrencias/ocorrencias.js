import { Tracker } from 'meteor/tracker';
import { Mongo } from 'meteor/mongo';
import SimpleSchema from 'simpl-schema';

import { validarCPF } from '../../utils';

let Ocorrencia = new Mongo.Collection('ocorrencias')

let OcorrenciasSchema = new SimpleSchema({
    funcionario: {
        type: String
    },
    dataDaOcorrencia : {
        type : Date
    },
    descricao : {
        type : String
    }
}, {tracker: Tracker});

Ocorrencia.attachSchema(OcorrenciasSchema)

export default Ocorrencia
