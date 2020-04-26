const express = require("express");

const app = express();

/**
 * Métodos HTTP:
 *
 * GET: Buscar informações do backend
 * POST: Criar uma informação no backend
 * PUT/PATCH: Alterar uma informação no backend
 * DELETE: Deletar uma informação no backend
 */

app.get("/projects", (_, res) => {
  return res.json([
    {
      id: 1,
      name: "Project Alpha",
      description: "Description project alpha",
    },
    {
      id: 2,
      name: "Project Bravo",
      description: "Description project bravo",
    },
  ]);
});

app.post("/projects", (req, _) => console.log(req.body.name));

app.put("/projects/:id", (req, _) => console.log(req.params.id));

app.delete("/projects/:id", (req, res) => console.log(req.params.id));

app.listen(3333, () => {
  console.log("🎯Iniciando o backend...");
});
