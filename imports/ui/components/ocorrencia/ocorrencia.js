import { Session } from 'meteor/session';
import { FlowRouter } from 'meteor/kadira:flow-router'
import { AutoForm } from 'meteor/aldeed:autoform'

import Ocorrencias from '../../../api/ocorrencias/ocorrencias'

import './ocorrencia.html';

Template.ocorrencias.onCreated(() => {
    AutoForm.addHooks("insertOcorrencias", {
        before : {
            insert: function(doc) {
                doc.funcionario = FlowRouter.getParam('funcionarioId')

                return doc
            }
        }
    })
})

Template.ocorrencias.helpers({
    Ocorrencias() {
        return Ocorrencias;
    },
    ocorrencias() {
        return Ocorrencias.find({funcionario: FlowRouter.getParam('funcionarioId')}).fetch()
    },
    atual() {
        return Ocorrencias.findOne({_id: Session.get('atual')})
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
