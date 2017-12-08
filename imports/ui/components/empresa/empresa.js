import { Session } from 'meteor/session'

import Empresas from '../../../api/empresas/empresas'

import './empresa.html';

Template.empresas.onCreated(function () {
})

Template.empresas.helpers({
    Empresas() {
        return Empresas;
    },
    empresas() {
        return Empresas.find();
    },
    atual() {
        return Empresas.findOne({_id: Session.get('atual')});
    }
})

Template.empresas.events({
    "click #updateBtn"() {
        Session.set('atual', this._id);
    },
    "click #deleteEmpresa"() {
        Empresas.remove({_id: this._id});
    }
})
