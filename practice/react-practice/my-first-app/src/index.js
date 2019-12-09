import React from "react";
import ReactDOM from "react-dom";

/* 
React.createElement(
type,
    [props],
    [...children]
)
*/

const title = React.createElement("h1", { id: "top" }, "Hello World!");

const someTitle = "Welcome to my React website!";

const footer = (
  <div id="footer">
    <p>{someTitle}</p>
    <ul>
      <li>List Item 1</li>
    </ul>
  </div>
);

const footer2 = React.createElement("div", { id: "footer" });

const greeting = React.createElement("p", null, "Hello there!");

const idOfDiv = "test";

const app = (
  <div id={idOfDiv}>
    {title}
    {greeting}
  </div>
);

// ReactDOM.render(element, container[, callback])
ReactDOM.render(title, document.getElementById("root"));

// ReactDOM.render(greeting, document.getElementById("root"));
