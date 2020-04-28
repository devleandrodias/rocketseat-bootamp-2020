const express = require("express");
const { uuid } = require("uuidv4");

const app = express();

app.use(express.json());

/**
 * Métodos HTTP:
 *
 * GET: Buscar informações do backend
 * POST: Criar uma informação no backend
 * PUT/PATCH: Alterar uma informação no backend
 * DELETE: Deletar uma informação no backend
 */

/**
 * Tipos de parâmetros:
 *
 * Query params: Filtros e paginação
 * Route params:
 * Request body:
 */

const projects = [];

app.post("/projects", (req, res) => {
  const { owner } = req.query;
  const body = req.body;

  projects.push({ id: uuid(), owner, ...body });

  return res.send(body);
});

app.get("/projects", (_, res) => {
  return res.json(projects);
});

app.get("/projects/:id", (req, res) => {
  const { id } = req.params;
  return res.json(projects.find((project) => project.id === id));
});

app.put("/projects/:id", (req, res) => {
  const { id } = req.params;
  const { owner } = req.query;
  const body = req.body;

  const projectIndex = projects.find((project) => project.id === id);

  if (projectIndex < 0)
    return res.status(400).json({ error: "Project nor found" });

  const project = { id, owner, ...body };

  projects[projectIndex] = project;

  return res.json(project);
});

app.delete("/projects/:id", (req, res) => {
  const { id } = req.params;

  const projectIndex = projects.find((project) => project.id === id);

  if (projectIndex < 0)
    return res.status(400).json({ error: "Project nor found" });

  projects.slice(projectIndex, 1);

  return res.send().status(204);
});

app.listen(3333, () => {
  console.log("🎯Iniciando o backend...");
});
