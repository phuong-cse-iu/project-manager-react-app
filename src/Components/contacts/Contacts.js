import React, { Component } from "react";
import Contact from "./Contact";
import { Consumer } from "../../context";

class Contacts extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Consumer>
        {value => {
          const { contacts } = value;
          return (
            <React.Fragment>
              <h1 className="display-4 mb-2">
                <span className="text-danger">Contact List</span>
              </h1>
              {contacts.map(contact => (
                <Contact
                  contact={contact}
                  key={contact.id}
                />
              ))}
            </React.Fragment>
          );
        }}
      </Consumer>
    );
  }
}

export default Contacts;
