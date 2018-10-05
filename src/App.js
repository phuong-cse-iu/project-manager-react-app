import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './layout/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import Contacts from './Components/contacts/Contacts';
import { Provider } from './context';
import AddContact from './Components/contacts/AddContact';

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
      <Provider>
        <div className="App">
        <Header title="My App"/>
        <AddContact />
        <div className="container">
          {/* <Project projects={this.state.projects}/> */}
          <Contacts />
        </div>
      </div>
      </Provider>
    );
  }
}

export default App;
