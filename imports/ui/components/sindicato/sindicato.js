import { Session } from 'meteor/session';

import Sindicatos from '../../../api/sindicatos/sindicatos'

import './sindicato.html';

Template.sindicatos.onCreated(() => {
    window.test = Sindicatos
})

Template.sindicatos.helpers({
    Sindicatos() {
        return Sindicatos;
    },
    sindicatos() {
        return Sindicatos.find()
    }
})

Template.sindicatos.events({
    "click #updateBtn"() {
        Session.set('atual', this._id);
    },
    "click #deleteSindicato"() {
        Sindicatos.remove({_id: this._id});
    }
})
