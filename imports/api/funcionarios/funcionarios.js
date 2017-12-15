import { Mongo } from 'meteor/mongo';
import { Tracker } from 'meteor/tracker';
import SimpleSchema from 'simpl-schema';

let Funcionarios = new Mongo.Collection('funcionarios');

let FuncionariosSchema = new SimpleSchema({
    nome: {
        type: String
    },
    cpf: {
        type: String
    },
    salario : {
        type: Number,
        min: 0
    },
    empresa: {
        type: String
    }
});

Funcionarios.attachSchema(FuncionariosSchema);

export default Funcionarios;
