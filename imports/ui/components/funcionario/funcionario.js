import { FlowRouter } from 'meteor/kadira:flow-router';
import { Session } from 'meteor/session';
import { AutoForm } from 'meteor/aldeed:autoform';

import Funcionarios from '../../../api/funcionarios/funcionarios'

import './funcionario.html'

Template.funcionario.onCreated(function() {
    console.log(FlowRouter.getParam('id'))

    window.aT = AutoForm

    AutoForm.addHooks('addFuncionario', {
        before: {
            insert: function(doc, ss) {
                console.log(doc)
                doc.empresa = FlowRouter.getParam('id')

                return doc
            }
        }
    })
})

Template.funcionario.helpers({
    Funcionarios() {
        return Funcionarios
    },
    empresaAtual() {
        return Funcionarios.find({empresa: FlowRouter.getParam('id')}).fetch();
    }
})
