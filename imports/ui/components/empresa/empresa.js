import Empresas from '../../../api/empresas/empresas'

import './empresa.html';

Template.empresas.onCreated(() => {
    window.test = Empresas
})

Template.empresas.helpers({
    Empresas() {
        return Empresas;
    },
    empresas() {
        return Empresas.find()
    }
})
