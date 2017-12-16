import AvisosPrevios from '../../../api/avisosPrevios/avisosPrevios'

import './avisoPrevio.html';

Template.avisosPrevios.onCreated(() => {
    window.test = AvisosPrevios
})

Template.avisosPrevios.helpers({
    AvisosPrevios() {
        return AvisosPrevios;
    },
    avisosPrevios() {
        return AvisosPrevios.find()
    }
})
