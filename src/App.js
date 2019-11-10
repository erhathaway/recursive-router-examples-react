import React, { Component } from 'react';
import routerGenerator from 'recursive-router-react';
import logo from './logo.svg';
import './App.css';

const Router = routerGenerator();

class DelayRender extends Component {
  constructor(props) {
    super(props)
    this.state = {
      show: false,
    }
    console.log(this)
  }

  componentDidMount() {
    setTimeout(() => this.setState({ show: true }), this.props.delayMS);
  }

  render() {
    if (this.state.show) return this.props.children
    return null;
  }
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <div> hi </div>
        <Router name="root" type="root">
          <header className="App-header">
            <Router name="home" type="scene" parent="root">
              <img src={logo} className="App-logo" alt="logo" />
              <Router name="home-data1" type="feature" parent="home"/>
              <Router name="home-data2" type="feature" parent="home">
                <DelayRender delayMS={200}>
                  <Router name="home-scene1" type="scene" parent="home-data2"/>
                </DelayRender>
                <Router name="home-scene2" type="scene" parent="home-data2"/>
              </Router>
              <Router name="home-data3" type="feature" parent="home"/>
            </Router>
            <Router name="users" type="scene" parent="root">
              <img src={logo} className="App-logo" alt="logo" />
              <Router name="user-data1" type="data" parent="users"/>
            </Router>
            <p>
              Edit <code>src/App.js</code> and save to reload.
            </p>
            <a
              className="App-link"
              href="https://reactjs.org"
              target="_blank"
              rel="noopener noreferrer"
            >
              Learn React
            </a>
          </header>
      </Router>
        </div>
    );
  }
}

export default App;
