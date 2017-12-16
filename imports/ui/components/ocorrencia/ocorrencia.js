import { Session } from 'meteor/session';

import Ocorrencias from '../../../api/ocorrencias/ocorrencias'

import './ocorrencia.html';

Template.ocorrencias.onCreated(() => {
    window.test = Ocorrencias
})

Template.ocorrencias.helpers({
    Ocorrencias() {
        return Ocorrencias;
    },
    ocorrencias() {
        return Ocorrencias.find()
    }
})

Template.ocorrencias.events({
    "click #updateBtn"() {
        Session.set('atual', this._id);
    },
    "click #deleteOcorrencia"() {
        Ocorrencias.remove({_id: this._id});
    }
})
