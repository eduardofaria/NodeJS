const express = require("express");
const app = express();
const routes = express.Router();
routes.get("/projects", (req, res) => {
    const { id } = req.query;
    if (!id){
        return res.status(200).send(projects);
    }
    
    const projectById = projects.filter((project) => project.id == id);
    (projectById.length > 0) ? res.status(200).send(projectById) : res.status(500).send({error: "Projeto não encontrado"});
    /*
    if (projectById.length > 0) {
        return res.status(200).send(projectById);
    }
    return res.status(500).send({error: "Projeto não encontrado"});
    */
    res.status(200).send({message: "Tem ID"});
});

const projects = [
    {
        id: 1,
        name: "Primeiro projeto",
        description: "Ambiente de testes e exercícios",
        author: "Eduardo"
    },
    {
        id: 2,
        name: "Segundo projeto",
        description: "Ambiente de testes e exercícios",
        author: "Eduardo"
    },
    {
        id: 3,
        name: "Terceiro projeto",
        description: "Ambiente de testes e exercícios",
        author: "Eduardo"
    }
];

app.use(routes);
app.listen(3000, () => console.log("Servidor rodando na porta 3000"));
