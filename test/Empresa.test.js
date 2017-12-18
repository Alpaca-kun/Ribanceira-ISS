import * as assert from 'assert'

import Empresas from '../imports/api/empresas/empresas'

describe('Empresa', () =>{
    it('Deve validar uma empresa válida', () => {
        assert.equal(Empresas.simpleSchema().namedContext().validate({
            razaoSocial: "Ciadiesel",
            cnpj: "82007279000108",
            cidade: "cianorte",
            telefone: "44-36315840"
        }), true)
    })

    it('Deve não validar uma empresa inválida', () => {
        assert.equal(Empresas.simpleSchema().namedContext().validate({
            razaoSocial: "A",
            cnpj: "111",
            cidade: "1",
            telefone: "aaaa"
        }), false)
    })
})
