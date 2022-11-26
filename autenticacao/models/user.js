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
            'SELECT * FROM cadastro_paciente WHERE cpf = ?', [cpf]
        );
    }

    static save(user) {
        return db.execute(
            'INSERT INTO cadastro_paciente (cpf, nome, email, idade, senha) VALUES (?,?,?,?,?)',
            [user.cpf, user.nome, user.email, user.idade, user.senha]
        )
    }
};


