import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

import Quotes from "./Quotes";
import Lamps from "./Lamps";

class App extends Component {
  constructor(props)
  {
      super(props);
      this.state = {
        working: props.true
      };
  }
  handleClick = () => {
    this.setState({ working: !this.state.working });
  };
  render() {
    const working = this.state.working ? 'logo' : 'App-logo';
    const work = this.state.working ? 'travail' : 'pause';
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className={working} alt="logo" />
          <h1 className="App-title">Simpsons Quotes</h1>
        </header>
        <button onClick={this.handleClick}  className="work">
        {work.toUpperCase()}</button>
        <Lamps />
        <Quotes />
      </div>
    );
  }
}

export default App;