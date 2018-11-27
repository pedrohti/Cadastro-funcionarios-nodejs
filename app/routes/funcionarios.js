module.exports = (app) => {
    app.get('/cadfuncionarios', (req, res) => {
        app.controllers.funcionarioController.funcionariosCadastro(app, req, res)
    })
    
    app.get('/funcionarios', (req, res) => {
        app.controllers.funcionarioController.listarFuncionarios(app, req, res)
    })

    app.get('/funcionarioindividual', (req, res) => {
        app.controllers.funcionarioController.funcionarioIndividual(app, req, res)
    })

    app.post('/funcionarios/salvar', (req, res) => {
        app.controllers.funcionarioController.funcionariosSalvar(app, req, res)
    })

    app.get('/funcionarios/alterar', (req, res) => {
        app.controllers.funcionarioController.funcionariosAlterar(app, req, res)
    })

    app.get('/funcionarios/excluir', (req, res) => {
        app.controllers.funcionarioController.funcionariosExcluir(app, req, res)
    })
}