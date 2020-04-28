import express from "express";
import { helloWorld } from "./routes";
import createUser from "./services/create-user";

const app = express();

const response = createUser({
  name: "Leandro",
  email: "teste@gmail.com",
  password: "123456",
  techs: [
    { title: "NodeJs", levelExperience: "Sênior" },
    { title: "Flutter", levelExperience: "Júnior" },
  ],
});

console.log(response);

app.get("/", (_, res) => helloWorld);

app.listen(3333);

// Quando você está em { os : diz que você quer alterar nome da váriavel pelo proximo valor }
