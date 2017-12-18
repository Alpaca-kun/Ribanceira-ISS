import { Mongo } from 'meteor/mongo';
import { Tracker } from 'meteor/tracker';
import SimpleSchema from 'simpl-schema';

let HoraExtra = new Mongo.Collection('horaextra')

let HoraExtraSchema = new SimpleSchema({
    funcionario: {
        type: String
    },
    ano: {
        type: Number
    },
    mes: {
        type: Number
    },
    horas: {
        type: Number
    }
}, {tracker: Tracker})

HoraExtra.attachSchema(HoraExtraSchema)

export default HoraExtra
