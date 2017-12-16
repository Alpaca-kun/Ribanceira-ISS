import { FlowRouter } from 'meteor/kadira:flow-router';
import { Session } from 'meteor/session';

import Empresas from '../../../api/empresas/empresas'

import './funcionario.html'

Template.funcionario.onCreated(function() {
    console.log(FlowRouter.getParam('id'))
})

Template.funcionario.helpers({
    Empresas() {
        return Empresas
    },
    empresaAtual() {
        return Empresas.findOne({_id: FlowRouter.getParam('id')},
            {transform: function(doc) {
                doc.funcionarios = doc.funcionarios.map((x, i)=>{
                    x.indice = i
                    return x
                })
                return doc
            }})
    },
    escopo() {
        return Session.get('escopo');
    }
})

window.updateFuncionario = function(indice) {
    Session.set("escopo", "funcionarios."+indice);    
}
