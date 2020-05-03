import React, { Fragment, useState } from "react";

import backgroundImage from "./assets/background.jpeg";

import "./app.css";

import Header from "./components/header.component";

export default function App() {
  // useState retornar array com 2 posiçoes
  // váriaveis no react são imutáveis
  // 1. Váriavel com seu valor inicial
  // 2. Função para atualizar esse valor

  const [projects, setProjects] = useState([
    "Backend com .NET e CQRS",
    "Introdução do gRPC com Go Lang",
  ]);

  function handleAddProjet() {
    setProjects([...projects, `Novo projeto ${Date.now()}`]);
  }

  return (
    <Fragment>
      <Header title="Home Page">
        <p>Conteudo de dentro do componente</p>
      </Header>
      <img width={100} src={backgroundImage} alt="background" />

      <ul>
        {projects.map((project) => (
          <li key={project}>{project}</li>
        ))}
      </ul>

      <button type="button" onClick={() => handleAddProjet()}>
        Adicionar Projeto
      </button>
    </Fragment>
  );
}
