import React from "react";
import ReactDOM from "react-dom/client"; 
import "./popup.css";

const test = <img src="icon.png"/>;

const root = document.createElement("div");
document.body.appendChild(root);

const rootElement = ReactDOM.createRoot(root);
rootElement.render(test);
