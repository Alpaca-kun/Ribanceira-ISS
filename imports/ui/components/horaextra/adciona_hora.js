import { FlowRouter } from 'meteor/kadira:flow-router'
import { Session } from 'meteor/session'
import { AutoForm } from 'meteor/aldeed:autoform'

import Funcionarios from '../../../api/funcionarios/funcionarios'

import "./adciona_hora.html"

AutoForm.addHooks("updateHoras", {
    before: {
        update: function(doc) {
            doc.$set[this.template.data.doc.indice + ".ano"] = Session.get('ano')
            doc.$set[this.template.data.doc.indice + ".mes"] = Session.get('mes')

            return doc
        }
    }
})

Template.addhoras.helpers({
    Funcionarios() {
        return Funcionarios
    },
    funcionarios() {
        return Funcionarios.find({empresa: FlowRouter.getParam('id')}).fetch().map((doc, index) => {
            if (!doc.horas)
                doc.horas = []
            doc.indice = "horas." + (Object.values(doc.horas).length || 0)
            Object.values(doc.horas).forEach((d2, i2) => {
                if (d2.mes == Session.get('mes') && d2.ano == Session.get('ano')) {
                    doc.indice = "horas." + i2
                }
            })
            doc.indiceHoras = doc.indice + ".horas"
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
