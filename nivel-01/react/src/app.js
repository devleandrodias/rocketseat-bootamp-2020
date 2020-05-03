import React, { Fragment, useState, useEffect } from "react";
import api from "./services/api.service";
import "./app.css";

import Header from "./components/header.component";

export default function App() {
  // useState retornar array com 2 posiçoes
  // váriaveis no react são imutáveis
  // 1. Váriavel com seu valor inicial
  // 2. Função para atualizar esse valor

  const [projects, setProjects] = useState([]);

  // useEffect recebe dois parâmetros
  // 1. Qual função deseja disparar
  // 2. Quando quer disparar essa função

  useEffect(() => {
    api.get("projects").then((response) => {
      setProjects(response.data);
    });
  }, []);
  // [] = array de dependências

  function handleAddProjet() {
    setProjects([...projects, `Novo projeto ${Date.now()}`]);
  }

  return (
    <Fragment>
      <Header title="Home Page">
        <p>Conteudo de dentro do componente</p>
      </Header>

      <ul>
        {projects.map((project) => (
          <li key={project.id}>{project.description}</li>
        ))}
      </ul>

      <button type="button" onClick={() => handleAddProjet()}>
        Adicionar Projeto
      </button>
    </Fragment>
  );
}
