import React from "react";
import "./Faq.css";

const Faq = () => {
  return (
    <div className="faq-container">
      <h2>Frequently Asked Question</h2>
      <h3>1. How React Works?</h3>
      <p>
        React.js is a popular JavaScript library created by Facebook. A React
        App has a single root DOM node.By Rendering an element into the DOM, it
        changes the ui of the page. That means that, whenever a React Component
        returns an element, React compares the virtual DOM with the real DOM and
        then update the necessary changes in the real DOM.
      </p>
      <h3>2. How useState Works?</h3>
      <p>
        useState is basically a Hook that allows you to have state variables in
        a function. It returns two items, the first one is the current state
        value and the second one is a function which updates the current state
        value.
      </p>
    </div>
  );
};

export default Faq;
