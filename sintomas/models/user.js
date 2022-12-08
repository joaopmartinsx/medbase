const db = require('../util/database')

module.exports = class Sintomas {
    constructor(sintomas, tempo, medicamento, cronico, fumante, bebida, alimento, alimentoDiferente, cirurgia, nome, cpf) {
        this.sintomas = sintomas;
        this.tempo = tempo;
        this.medicamento = medicamento;
        this.cronico = cronico;
        this.fumante = fumante;
        this.bebida = bebida;
        this.alimento = alimento;
        this.alimentoDiferente = alimentoDiferente;
        this.cirurgia = cirurgia;
        this.nome = nome;
        this.cpf = cpf;
    }

    static find(sintomas) {
        return db.execute(
            'SELECT * FROM sintomas_pacientes WHERE sintomas = ?', [sintomas]
        );
    }

    static save(Sintomas) {
        return db.execute(
            'INSERT INTO sintomas_pacientes (sintomas, tempo, medicamento, cronico, fumante, bebida, alimento, alimentoDiferente, cirurgia, nome, cpf) VALUES (?,?,?,?,?,?,?,?,?,?,?)',
            [Sintomas.sintomas, Sintomas.tempo, Sintomas.medicamento, Sintomas.cronico, Sintomas.fumante, Sintomas.bebida, Sintomas.alimento, Sintomas.alimentoDiferente, Sintomas.cirurgia, Sintomas.nome, Sintomas.cpf]
        )
    }
}