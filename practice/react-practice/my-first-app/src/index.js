import React from "react";
import ReactDOM from "react-dom";

let myFirstReactElement = <h1 id="firstHeader">Hello, World!</h1>;

// SYNTAX: ReactDOM.render(element, container[, callback])
ReactDOM.render(myFirstReactElement, document.getElementById("root"));

/****** INTRODUCING JSX! ******/
// Note on using JSX: to run any JS variable, place the variable name between curly braces {<js_variable_name>}. Also, anything written in JSX should go between parentheses.

let text = <p>{someJSVariable}</p>;

/* SYNTAX:
React.createElement(
type,
    [props],
    [...children]
)
*/
