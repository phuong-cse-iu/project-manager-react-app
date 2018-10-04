import React, { Component } from 'react';
import { Consumer } from '../../context';
import uuid from 'uuid';

class AddContact extends Component {
  state = {
    name: '',
    email: '',
    phone: '',
  }

  onFieldsChange = (e) => {
    this.setState(
      {
        [e.target.name] : e.target.value
      }
    );
  }

  onSubmit = (dispatch, e) => {
    e.preventDefault();
    const { name, email, phone } = this.state;
    const newContact = {
      id: uuid(),
      name: name,
      email: email,
      phone: phone
    };

    dispatch({ type: 'ADD_CONTACT', payload: newContact });

    this.setState({
      name: '',
      email: '',
      phone: ''
    })
    console.log(this.state);
  }

  render() {
    const { name, email, phone } = this.state;
    return (
      <Consumer>
        {value => {
          const { dispatch } = value;
          return (
            <div className="card mb-3">
        <div className="card-header">
          Add Contact
        </div>
        <div className="card-body">
          <form onSubmit={this.onSubmit.bind(this, dispatch)}>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input 
                type="text" className="form-control form-control-lg"
                placeholder="Enter Name..."
                name="name"
                value={name}
                onChange={this.onFieldsChange}
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input 
                type="email" className="form-control form-control-lg"
                placeholder="Enter Email..."
                name="email"
                value={email}
                onChange={this.onFieldsChange}
              />
            </div>

            <div className="form-group">
              <label htmlFor="phone">Phone</label>
              <input 
                type="text" className="form-control form-control-lg"
                placeholder="Enter Phone..."
                name="phone"
                value={phone}
                onChange={this.onFieldsChange}
              />
            </div>
            <input type="submit" className="submit" value="Add Contact"
              className="btn btn-light btn-block"
            />
          </form>
        </div>
      </div>
          )
        }}
      </Consumer>
    )
  }
}

export default AddContact;
