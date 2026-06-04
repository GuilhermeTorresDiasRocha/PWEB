module.exports = function(app){
    app.get("/professores", (req, res) => {
        res.render("informacao/professores");
    });
}