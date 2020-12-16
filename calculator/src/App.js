import React, { Component } from "react";
import "./App.css";
import Button from "./components/Button.js";
import Input from "./components/Input";
import ClearButton from "./components/ClearButton";

class App extends Component {
  state = {
    input: "",
    previous: "",
    current: "",
    operator: "",
  };

  addToInput = (val) => {
    this.setState({ input: this.state.input + val });
  };

  addZeroToInput = (val) => {
    if (this.state.input !== "") {
      this.setState({ input: this.state.input + val });
    }
  };

  addDecimalToInput = (val) => {
    if (this.state.input.indexOf(".") === -1) {
      this.setState({ input: this.state.input + val });
    }
  };

  clearInput = () => {
    this.setState({
      input: "",
      previous: "",
      current: "",
      operator: "",
    });
  };

  add = () => {
    this.setState({ previous: this.state.input });
    this.setState({ input: "" });
    this.setState({ operator: "+" });
  };

  minus = () => {
    this.setState({ previous: this.state.input });
    this.setState({ input: "" });
    this.setState({ operator: "-" });
  };

  multiply = () => {
    this.setState({ previous: this.state.input });
    this.setState({ input: "" });
    this.setState({ operator: "x" });
  };

  divide = () => {
    this.setState({ previous: this.state.input });
    this.setState({ input: "" });
    this.setState({ operator: "÷" });
  };

  compute = () => {
    this.setState({ current: this.state.input },
      () => {

      if (this.state.operator === "+") {
        this.setState({
          input: parseFloat(this.state.previous) + parseFloat(this.state.current),
        });
      }
      if (this.state.operator === "x") {
        this.setState({
          input: parseFloat(this.state.previous) * parseFloat(this.state.current),
        });
      }
      if (this.state.operator === "-") {
        this.setState({
          input: parseFloat(this.state.previous) - parseFloat(this.state.current),
        });
      }
      if (this.state.operator === "÷") {
        this.setState({
          input: parseFloat(this.state.previous) / parseFloat(this.state.current),
        });
      }
    });
  };

  render() {
    const { input } = this.state;
    return (
      <div className="App">
        <div className="calc-wrapper">
          <div className="row">
            <Input>{input}</Input>
          </div>
          <div className="row">
            <Button handleClick={this.addToInput}>7</Button>
            <Button handleClick={this.addToInput}>8</Button>
            <Button handleClick={this.addToInput}>9</Button>
            <Button handleClick={this.divide}>÷</Button>
          </div>
          <div className="row">
            <Button handleClick={this.addToInput}>4</Button>
            <Button handleClick={this.addToInput}>5</Button>
            <Button handleClick={this.addToInput}>6</Button>
            <Button handleClick={this.multiply}>x</Button>
          </div>
          <div className="row">
            <Button handleClick={this.addToInput}>1</Button>
            <Button handleClick={this.addToInput}>2</Button>
            <Button handleClick={this.addToInput}>3</Button>
            <Button handleClick={this.add}>+</Button>
          </div>
          <div className="row">
            <Button handleClick={this.addDecimalToInput}>.</Button>
            <Button handleClick={this.addZeroToInput}>0</Button>
            <Button handleClick={this.compute}>=</Button>
            <Button handleClick={this.minus}>-</Button>
          </div>
          <div className="row">
            <ClearButton handleClear={this.clearInput} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
