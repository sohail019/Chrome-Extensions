import React from "react";
import ReactDOM from "react-dom/client"; 

const test = <p>Hello World</p>;

const root = document.createElement("div");
document.body.appendChild(root);

const rootElement = ReactDOM.createRoot(root);
rootElement.render(test);
