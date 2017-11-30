import Empresas from '../../../api/empresas/empresas'

import './empresa.html';

Template.addempresa.onCreated(() => {
    window.test = Empresas
})

Template.addempresa.helpers({
    Empresas() {
        return Empresas;
    }
})
