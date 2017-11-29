import { Empresas } from '../../../api/empresas/empresas'

import './empresa.html';

Template.addempresa.helpers({
    Empresas() {
        return Empresas;
    }
})
