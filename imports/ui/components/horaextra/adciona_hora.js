import { FlowRouter } from 'meteor/kadira:flow-router'
import { Session } from 'meteor/session'
import { AutoForm } from 'meteor/aldeed:autoform'

import HoraExtra from '../../../api/hora_extra/horaextra'
import Funcionarios from '../../../api/funcionarios/funcionarios'

import "./adciona_hora.html"

AutoForm.addHooks("insertHora", {
    before: {
        insert: function(doc) {
            doc.funcionario = FlowRouter.getParam('id')
            doc.ano = Session.get('ano')
            doc.mes = Session.get('mes')

            return doc
        }
    }
})

Template.addhoras.onCreated(() => {
    window.teste = HoraExtra
})

Template.addhoras.helpers({
    HoraExtra() {
        return HoraExtra
    },
    horas() {
        return Funcionarios.find({empresa: FlowRouter.getParam('id')}).fetch()
            .map(doc => {
                let hora = HoraExtra.findOne({funcionario: FlowRouter.getParam('id'), mes:Session.get('mes'), ano:Session.get('ano')})
                if (hora)
                    doc.hora = hora
                return doc
            })
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
