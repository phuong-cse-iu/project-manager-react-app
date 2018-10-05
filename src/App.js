import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Header from "./layout/Header";
import About from "./Components/pages/About";
import "bootstrap/dist/css/bootstrap.min.css";
import Contacts from "./Components/contacts/Contacts";
import { Provider } from "./context";
import AddContact from "./Components/contacts/AddContact";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      projects: [
        {
          title: "Bussiness Website",
          category: "Web Design"
        },
        {
          title: "Social App",
          category: "Mobile Development"
        },
        {
          title: "Ecommerce Shopping Cart",
          category: "Web Development"
        }
      ]
    };
  }

  render() {
    return (
      <Provider>
        <Router>
          <div className="App">
            <Header title="My App" />
            <div className="container">
              <Switch>
                <Route exact path="/" component={Contacts}/>
                <Route exact path="/contact/add" component={AddContact}/>
                <Route exact path="/about" component={About}/>
              </Switch>
            </div>
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
