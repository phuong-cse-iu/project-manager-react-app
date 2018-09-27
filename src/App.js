import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Project from './Components/Project';
import Header from './Components/Header';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      projects: [
        {
          title: 'Bussiness Website',
          category: 'Web Design'
        },
        {
          title: 'Social App',
          category: 'Mobile Development'
        },
        {
          title: 'Ecommerce Shopping Cart',
          category: 'Web Development'
        }
      ]
    }
  }

  render() {
    return (
      <div className="App">
        <Header title="My App"/>
        <Project projects={this.state.projects}/>
      </div>
    );
  }
}

export default App;
