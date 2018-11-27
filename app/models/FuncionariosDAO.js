class FuncionariosDAO {

    constructor(connection) {
        this._connection = connection;
    }

    listarTodosFuncionarios(cb) {
        this._connection.open((error, db) => {
            if (db) {
                db.collection('funcionarios').find({}).toArray((error, resultado) => {
                    return resultado ? cb(null, resultado) : cb('Não há funcionários cadastrados', null);
                })
            } else {
                cb('Erro na conexão', null);
            }
        })
    }

    listarFuncionarioIndividual(id, cb) {
        this._connection.open((error, db) => {
            if (db) {
                db.collection('funcionarios').find({_id: this._connection.getObjectID(id)}).toArray((error, resultado) => {
                    return resultado ? cb(null, resultado) : cb('Não há funcionários cadastrados', null);
                })
            } else {
                cb('Erro na conexão', null);
            }
        })
    }

    salvarFuncionarios(dados, cb){
        this._connection.open((error, db) => {
            if (db) {
                db.collection('funcionarios').insert(dados)
                    cb(null, 'Inclusão com sucesso');
                } else {
                    cb('Inclusão com erro', null);
                }
            })
    }

    salvarFuncionarioAlterado(id, dados, cb){
        this._connection.open((error, db) => {
            if (db) {
                db.collection('funcionarios').update({_id: this._connection.getObjectID(id)}, dados)
                    cb(null, 'Alterado com sucesso');
                } else {
                    cb('Alteração com erro', null);
                }
            })
    }

    alterarFuncionarios(id, cb) {
        this._connection.open((error, db) => {
            if (db) {
                db.collection('funcionarios').find({_id: this._connection.getObjectID(id)}).toArray((error, resultado) => {
                    return resultado ? cb(null, resultado) : cb("Não foi possivel alterar o funcionario", null)
                })
            } else {
                cb(error, null)
            }
        })
    }

    excluirFuncionarios(id, cb) {
        this._connection.open((error, db) => {
            if (db) {
                db.collection('funcionarios').remove({_id: this._connection.getObjectID(id)}, (error, resultado) => {
                    return resultado ? cb(null, 'Funcionario removido') : cb('Funcionario nao removido', null)
                })
            }
        })
    }
}

module.exports = () => FuncionariosDAO;