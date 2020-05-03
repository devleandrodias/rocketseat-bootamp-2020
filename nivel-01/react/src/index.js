/**
 * Babel: Converter (transpilar) código do react para um código que o navegador entenda
 *
 * Webpack: Para cada tipo de arquivo (.js, .css, .png) eu vou converter o código de uma maneira diferente
 *
 * Loaders: babel-loader, css-loader, image-loader, file-loader (Utilizado pelo webpack para fazer sentido para javascript)
 */

import React from "react";
import { render } from "react-dom";
import App from "./app";

// JSX: HTML dentro do JavaScript (Javascript XML)

render(<App />, document.getElementById("app"));
