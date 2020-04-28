const express = require("express");
const { uuid } = require("uuidv4");

const app = express();

app.use(express.json());
app.use(logRequests);

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

/**
 * Middleware:
 *
 * Ele é um interceptador de requisições,
 * ele pode interromper totalmente toda a requisiçao,
 * ou ele pode altrar dados da requisição
 */

const projects = [];

// Middleware
function logRequests(req, res, next) {
  const { method, url } = req;
  console.log(`[${method.toUpperCase()}] ${url}`);
  next();
}

function logRequestsCustomizado(req, res, next) {
  const { method, url } = req;
  const { owner } = req.query;

  const logLabel = `[${method.toUpperCase()}] ${url} - Owner: ${owner} `;

  console.log("1");
  console.time(logLabel);

  next(); // Passo 01
  console.log("2");
  console.timeEnd(logLabel);
  // Passo 03
}

// Passo 02
app.post("/projects", logRequestsCustomizado, (req, res) => {
  console.log("3");
  const { owner } = req.query;
  const body = req.body;

  projects.push({ id: uuid(), owner, ...body });

  return res.send(body);
});

app.get("/projects", (req, res) => {
  const { name } = req.query;

  const results = name
    ? projects.filter((project) => project.title.includes(name))
    : projects;

  return res.json(results);
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
