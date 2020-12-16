import React, { Component } from "react";
import "./Button.css";

class Button extends Component {
  isOperator = (val) => {
    return !isNaN(val) || val === "." || val === "=";
  };

  render() {
    const { handleClick, children } = this.props;
    return (
      <div
        className={`button ${this.isOperator(children) ? "" : "operator"}`}
        onClick={() => handleClick(children)}
      >
        {children}
      </div>
    );
  }
}

export default Button;
