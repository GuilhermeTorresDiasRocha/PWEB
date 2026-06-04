const app = require("./app/config/server");
const texto = require("./modulo1");

//definindo rotas
const rotaHome = require("./app/routes/home");
rotaHome(app);

const rotaAdicionarUsuario = require("./app/routes/adicionar_usuario");
rotaAdicionarUsuario(app);

const rotaHistoria = require("./app/routes/historia");
rotaHistoria(app);

const rotaCursos = require("./app/routes/cursos");
rotaCursos(app);

const rotaProfessores = require("./app/routes/professores");
rotaProfessores(app);

app.listen(3000, () => {
	console.log("Server started!");
	console.log(texto);
});
