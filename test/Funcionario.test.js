import * as assert from 'assert'

import Funcionarios from '../imports/api/funcionarios/funcionarios'

describe('Funcionario', () =>{
    it('Deve validar um funcionario válida', () => {
        assert.equal(Funcionarios.simpleSchema().namedContext().validate({
            nome : "Christian",
            cpf : "01205266976",
            salario : 800,
            sindicato : "Depart. de computacao",
            empresa : "DIN",
        }), true)
    })

    it('Deve não validar um funcionario inválida', () => {
        assert.equal(Funcionarios.simpleSchema().namedContext().validate({
            nome : "Chr",
            cpf : "01205266900",
            salario : -800,
            sindicato : "aaaa",
            empresa : "DIN",
        }), false)
    })
})
