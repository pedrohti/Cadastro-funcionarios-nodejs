module.exports.listarFuncionarios = (app, req, res) => {
    const connection = new app.config.DBConnection();
    const funcionariosDAO = new app.models.FuncionariosDAO(connection);
    funcionariosDAO.listarTodosFuncionarios((error, resultado) => {
        return resultado ? res.render('funcionarios', {funcionarios: resultado}) : res.send(error);
    })
}

module.exports.funcionarioIndividual = (app, req, res) => {
    const connection = new app.config.DBConnection();
    const funcionariosDAO = new app.models.FuncionariosDAO(connection);
    const id = req.query.id;
    funcionariosDAO.listarFuncionarioIndividual(id, (error, resultado) => {
        return resultado ? res.render('funcionarioindividual', {funcionario: resultado}) : res.send(error);
    })
}

module.exports.funcionariosCadastro = (app, req, res) => {
    res.render('cadastrofuncionarios', {dadosFuncionario: [{}], conteudo: ['C']});
}

module.exports.funcionariosSalvar = (app, req, res) => {
    const dados = req.body;
    const id = req.query.id;
    const connection = new app.config.DBConnection();
    const funcionariosDAO = new app.models.FuncionariosDAO(connection);
    
    if (id == 'C') {
        funcionariosDAO.salvarFuncionarios(dados, (error, resultado) => {
            return resultado ? res.redirect('/funcionarios') : res.send(error);
        })
    } else {
        funcionariosDAO.salvarFuncionarioAlterado(id, dados, (error, resultado) => {
            return resultado ? res.redirect('/funcionarios') : res.send(error);
        })
    }
}

module.exports.funcionariosAlterar = (app, req, res) => {
    const id = req.query.id;
    const connection = new app.config.DBConnection();
    const funcionariosDAO = new app.models.FuncionariosDAO(connection);
    funcionariosDAO.alterarFuncionarios(id, (error, resultado) => {
        return resultado ? res.render('cadastrofuncionarios', {dadosFuncionario: resultado, conteudo: id}) : res.send(error);
    })
}

module.exports.funcionariosExcluir = (app, req, res) => {
    const id_funcionario = req.query.id;
    const connection = new app.config.DBConnection();
    const funcionariosDAO = new app.models.FuncionariosDAO(connection);
    funcionariosDAO.excluirFuncionarios(id_funcionario, (error, resultado) => {
        return resultado ? res.redirect('/funcionarios') : res.send(error);
    })
    
}
