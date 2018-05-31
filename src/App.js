import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {

    constructor(){
        super();
        this.state = {echoInput: ""}
        this.echo = this.echo.bind(this);
        this.handleEchoInput = this.handleEchoInput.bind(this);
    }

    echo(){
        const self = this;
        const echoPhrase = this.state && this.state.echoInput ? encodeURIComponent(this.state.echoInput) : "";
        this.setState({echoInput: ""});
        fetch('/api/echo/' + echoPhrase, {
            method: 'GET'
        }).then(response => {
            if(response.ok){
                return response.text()
            }
        }).then(text => {
            debugger;
            if(self.state && self.state.echoes && self.state.echoes.length > 0)
                self.setState(prevState => ({
                    echoes: [...prevState.echoes, text]
                }));
            else
                self.setState({echoes: [text]});
        })
    }

    handleEchoInput(event) {
        this.setState({echoInput: event.target.value,})
    }

    EchoList(echoes) {
        const listItems = echoes.map( (echo, index, array) => <li key={"echo-"+index}>{echo}</li>)
        return <ul>{listItems}</ul>
    }

  render() {
        const Echoes = this.state && this.state.echoes && this.state.echoes.length > 0 ? this.EchoList(this.state.echoes) : "";

    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">ECHO Echo echo</h1>
        </header>
          <div className={"App-body"}>
              <form onSubmit={function(e){e.preventDefault();}}>
              <input id={"stuffToEcho"} value={this.state.echoInput} onChange={this.handleEchoInput}></input>
              <button onClick={this.echo}>Echo!</button>
              </form>
              {Echoes}
          </div>
      </div>
    );
  }
}

export default App;
