module.exports = (app) => {
    app.get('/', (req, res) => {
        app.controllers.homeController.homePrincipal(app, req, res)
    })
}