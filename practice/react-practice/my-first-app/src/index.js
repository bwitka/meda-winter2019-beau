import React from "react";
import ReactDOM from "react-dom";

/* 
React.createElement(
type,
    [props],
    [...children]
)
*/

const title = React.createElement("h1", null, "Hello World!");

const greeting = React.createElement("p", null, "Hello there!");

// ReactDOM.render(element, container[, callback])
ReactDOM.render(title, document.getElementById("root"));

// ReactDOM.render(greeting, document.getElementById("root"));
