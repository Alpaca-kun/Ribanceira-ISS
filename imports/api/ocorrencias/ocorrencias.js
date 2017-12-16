import { Tracker } from 'meteor/tracker';
import SimpleSchema from 'simpl-schema';

import { validarCPF } from '../../utils';

export const OcorrenciasSchema = new SimpleSchema({
    dataDaOcorrencia : {
        type : Date
    },
    justificativa : {
        type : String
    }
}, {tracker: Tracker});
