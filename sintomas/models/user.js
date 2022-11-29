const db = require('../util/database')

module.exports =  class Sintomas{
    constructor(sintomas, tempo, alergia, doenca, diabetes){
        this.sintomas = sintomas;
        this.tempo = tempo;
        this.alergia = alergia;
        this.doenca = doenca;
        this.diabetes = diabetes
    }

    static find(sintomas){
        return db.execute(
            'SELECT * FROM sintomas_pacientes WHERE sintomas = ?', [sintomas]
        );
    }

    static save(Sintomas) {
        return db.execute(
            'INSERT INTO sintomas_pacientes (sintomas, tempo, alergia, doenca, diabetes) VALUES (?,?,?,?,?)',
            [Sintomas.sintomas, Sintomas.tempo, Sintomas.alergia, Sintomas.doenca, Sintomas.diabetes]
        )
    }
}