import React, { Component } from 'react'

const Context = React.createContext();
const reduce = (state, action) => {
  switch(action.type) {
    case 'DELETE_CONTACT':
      return {
        ...state,
        contacts: state.contacts.filter(contact => contact.id !== action.payload)
      }
      case 'ADD_CONTACT':
      return {
        ...state,
        contacts: [action.payload, ...state.contacts]
      }
    default:
      return state;
  }
}

export class Provider extends Component {
  state = {
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
      
    ],
    dispatch: action => this.setState(state => reduce(state, action))
  };

  render() {
    return (
      <Context.Provider value={this.state}>
        {this.props.children}
      </Context.Provider>
    )
  }
}

export const Consumer = Context.Consumer;
 
