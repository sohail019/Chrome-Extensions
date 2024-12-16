import React from "react";
import ReactDOM from "react-dom/client";
import "./options.css";

const test = <div>
    <h1>Options Page</h1>
    <img src="icon.png" />
</div>;

const root = document.createElement("div");
document.body.appendChild(root);

const rootElement = ReactDOM.createRoot(root);
rootElement.render(test);
