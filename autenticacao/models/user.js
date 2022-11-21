const db = require('../util/database');

module.exports = class User {
    constructor(cpf,nome,email,idade, senha) {
        this.cpf = cpf;
        this.nome = nome;
        this.email = email;
        this.idade = idade;
        this.senha = senha;
    }

    static find(cpf) {
        return db.execute(
            'SELECT * FROM cadastro WHERE cpf = ?', [cpf]
        );
    }

    static save(user) {
        return db.execute(
            'INSERT INTO cadastro (cpf, nome, email, idade, senha) VALUES (?,?,?,?,?)',
            [user.cpf, user.nome, user.email, user.idade, user.senha]
        )
    }
};

module.exports = class Medico {
    constructor(crm,nome,especialidade, senha) {
        this.crm = crm;
        this.nome = nome;
        this.especialidade = especialidade;
        this.senha = senha;
    }

    static find(crm) {
        return db.execute(
            'SELECT * FROM cadastro_medico WHERE crm = ?', [crm]
        );
    }

    static save(medico) {
        return db.execute(
            'INSERT INTO cadastro_medico (crm, nome, especialidade, senha) VALUES (?,?,?,?)',
            [medico.crm, medico.nome, medico.especialidade, medico.senha]
        )
    }
};

