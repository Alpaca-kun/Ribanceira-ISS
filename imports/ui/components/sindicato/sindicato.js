import Sindicatos from '../../../api/sindicatos/sindicatos'

import './sindicato.html';

Template.sindicatos.onCreated(() => {
    window.test = Sindicatos
})

Template.sindicatos.helpers({
    Sindicatos() {
        return Sindicatos;
    },
    sindicatos() {
        return Sindicatos.find()
    }
})
