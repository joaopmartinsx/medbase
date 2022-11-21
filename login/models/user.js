const db = require('../util/database');
 
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