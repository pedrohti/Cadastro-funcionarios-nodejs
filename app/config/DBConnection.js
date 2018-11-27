const mongoClient = require('mongodb').MongoClient
const ObjectID = require('mongodb').ObjectID
const servidor = 'localhost';
const porta = 27017;
const banco = 'bdfuncionarios';

class DBConnection {

    url() {
        return `mongodb://${servidor}:${porta}`
    }

    open(callback) {

        mongoClient.connect(this.url(), { useNewUrlParser: true }, (error, client) => {

            return client ? callback(null, client.db(banco)) : callback('Houve um erro na conexão com o servidor do banco de dados', null)

        })
    }

    getObjectID(id) {
        return new ObjectID(id);
    }
    
}

module.exports = () => DBConnection;