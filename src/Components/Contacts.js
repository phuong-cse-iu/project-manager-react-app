import React, { Component } from "react";
import Contact from "./Contact";

class Contacts extends Component {
  constructor(props) {
    super(props);
    this.state = {
      contacts: [
        {
          id: 1,
          name: "John Doe",
          email: "jdoe@email.com",
          phone: "8834-67250-34237"
        },
        {
          id: 2,
          name: "Baby Noop",
          email: "baby@email.com",
          phone: "8834-7894-34237"
        },
        {
          id: 3,
          name: "Karen Git",
          email: "karen@email.com",
          phone: "1234-67250-34237"
        },
        {
          id: 4,
          name: "Philip Danny",
          email: "philip@email.com",
          phone: "2235-67250-34237"
        }
      ]
    };
  }

  componentDidMount() {}

  render() {
    const { contacts } = this.state;

    return (
      <div>
        {contacts.map(contact => (
          <Contact 
            contact={contact} 
            key={contact.id}
          />
        ))}
      </div>
    );
  }
}

export default Contacts;
