const db = require('../util/database');
 
module.exports = class Pegareceita {
    constructor(remedios, receita) {
        this.remedios = remedios;
        this.receita = receita
    }

    static find(remedios) {
        return db.execute(
            'SELECT * FROM receitas WHERE remedios = ?', [remedios]
        );
    }

    static save(inserirReceita) {
        return db.execute(
            'INSERT INTO receitas (remedios, receita) VALUES (?,?)',
            [inserirReceita.remedios, inserirReceita.receita]
        )
    }
};