/*
 * Curso de Node.js y Express.
 * Creado para freeCodeCamp en Español.
 * Por: Estefania Cassingena Navone.
 */

const express = require("express");
const app = express();

// Simular una base de datos.
const { infoCursos } = require("./cursos.js");
///.get es el método GET y "/" es como la página principal
app.get("/", (req, res) => {
  res.send("Mi primer servidor. Cursos Backen-Node 2024 💻.");
});
app.get("/cursos", (req, res) => {
  res.send(infoCursos);
});

app.get("/cursos/programacion", (req, res) => {
  res.send(infoCursos.programacion);
});
app.get("/cursos/matematicas", (req, res) => {
  res.send(infoCursos.matematicas);
});
const PUERTO = process.env.PORT || 3000;

app.listen(PUERTO, () => {
  console.log(`El servidor esta escuchando en el puerto ${PUERTO}...`);
});
