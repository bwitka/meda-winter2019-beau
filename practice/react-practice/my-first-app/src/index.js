import React from "react";
import ReactDOM from "react-dom";

// Create our first component, barebones.
// first argument is name of element, second argument is attributes, third is content of element.
const title = React.createElement(
  "h1",
  {
    id: "top"
  },
  "Hello World!"
);

const paragraph = React.createElement("p", null, "This is a paragraph!");

let myFirstReactElement = <h1 id="firstHeader">Hello, World!</h1>;

// SYNTAX: ReactDOM.render(element, container[, callback])
ReactDOM.render(myFirstReactElement, document.getElementById("root"));

/****** INTRODUCING JSX! ******/
// Note on using JSX: to run any JS variable, place the variable name between curly braces {<js_variable_name>}. Also, anything written in JSX should go between parentheses.

// let text = <p>{someJSVariable}</p>;

/****** FUNCTION COMPONENTS ******/

// Note: whenever you have a function, you need to return JSX.
function About() {
  return <p>This is officially a React function component.</p>;
}

// Important note!!!: always be sure to capitalize your function names (i.e. don't start with a lowercase letter).

// Note: 'props' refers to React properties.
function H1Generator(props) {
  return <h1>{props.text}</h1>;
}

const H2Generator = props => {
  return <h2>{props.something}</h2>;
};

/****** CLASS COMPONENTS ******/

class Counter extends React.Component {
  constructor() {
    // note: super() runs the constructor of the class it extends.
    super();

    this.state = {
      score: 0
    };
  }

  render() {
    return <p>The current score is: </p>;
  }
}

const idOfDiv = "test";

// JSX version of createElement()
const app = (
  <div id={idOfDiv}>
    <About tempScore={3} />
    <H1Generator text="Hi, this is custom text" />
    <H1Generator text="This is some other line!" />
    <H2Generator something="Some text" />
    <Counter />
    {title}
    {paragraph}
  </div>
);

// Render component to target element.
ReactDOM.render(app, document.getElementById("root"));

/* SYNTAX:
React.createElement(
type,
    [props],
    [...children]
)
*/
