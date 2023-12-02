const express = require("express");
const mongoose = require("mongoose");

const dbPassword = require("./personal.js"); //senha do banco de dados no .gitignore

const app = express();
app.use(express.json());
const port = 3000;

//mongoose.connect(`mongodb+srv://eduardo:${dbPassword}@starwars-api.uayyqb4.mongodb.net/?retryWrites=true&w=majority`);
//ex: const Cat = mongoose.model('Cat', { name: String });
const Filme = mongoose.model("Filme", {
    titulo: String,
    descricao: String,
    img_url: String,
    trailer_url: String
});

//Gravar novos filmes
app.post("/", async (req, res) => {
    const filme = new Filme({
        titulo: req.body.titulo,
        descricao: req.body.descricao,
        img_url: req.body.img_url,
        trailer_url: req.body.trailer_url
    })
    await filme.save();
    res.send(filme);
})

//Carregar filmes salvos
app.get("/", async (req, res) => {
    const films = await Filme.find()
    res.status(200).send(films);
});

app.listen(port, () => {
    mongoose.connect(`mongodb+srv://eduardo:${dbPassword}@starwars-api.uayyqb4.mongodb.net/?retryWrites=true&w=majority`);
    console.log(`Listening na porta ${port}...`);
})