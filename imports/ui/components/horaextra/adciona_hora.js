import { FlowRouter } from 'meteor/kadira:flow-router'
import { Session } from 'meteor/session'
import { AutoForm } from 'meteor/aldeed:autoform'

import HoraExtra from '../../../api/hora_extra/horaextra'
import Funcionarios from '../../../api/funcionarios/funcionarios'

import "./adciona_hora.html"

AutoForm.addHooks("updateHoras", {
    before: {
        insert: function(doc) {
        }
    }
})

Template.addhoras.helpers({
    funcionarios() {
        Funcionarios.find({empresa: FlowRouter.getParam('id')}).fetch()
    }
})

Template.addhoras.events({
    "keyup #ano"(e) {
        Session.set('ano', e.target.value)
    },
    "keyup #mes"(e) {
        Session.set('mes', e.target.value)
    }
})
