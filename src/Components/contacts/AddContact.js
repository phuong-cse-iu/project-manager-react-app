import React, { Component } from "react";
import { Consumer } from "../../context";
import uuid from "uuid";
import TextInputGroup from "../../layout/ TextInputGroup";

class AddContact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      phone: "",
      errors: {
        
      }
    };
  }

  onComponentDidMount() {
    this.setState({
      name: "",
      email: "",
      phone: "",
      errors: {
       
      }
    });
  }

  validateFields(valueToBeValidated, errType) {
    if (valueToBeValidated === "") {
      this.setState({ errors: { [errType]: `${errType} is required` } });
      return;
    }
  }

  onFieldsChange = e => {
    const { name, email, phone } = this.state;
    this.setState({
      [e.target.name]: e.target.value
    });
    this.validateFields(name, "name");
    this.validateFields(email, "email");
    this.validateFields(phone, "phone");
  };

  onSubmit = (dispatch, e) => {
    e.preventDefault();
    const { name, email, phone } = this.state;
    if (name === "") {
      this.setState({ errors: { name: 'name is required' } });
      return;
    }

    if (email === "") {
      this.setState({ errors: { email: 'email is required' } });
      return;
    }

    if (phone === "") {
      this.setState({ errors: { phone: 'phone is required' } });
      return;
    }
    // // Check for errors
    // this.validateFields(name, "name");
    // this.validateFields(email, "email");
    // this.validateFields(phone, "phone");

    const newContact = {
      id: uuid(),
      name: name,
      email: email,
      phone: phone
    };

    dispatch({ type: "ADD_CONTACT", payload: newContact });

    this.setState({
      name: "",
      email: "",
      phone: "",
      errors: {}
    });
    console.log(this.state);
  };

  render() {
    const { name, email, phone, errors } = this.state;
    return (
      <Consumer>
        {value => {
          const { dispatch } = value;
          return (
              <div className="card mb-3">
                <div className="card-header">Add Contact</div>
                <div className="card-body">
                  <form onSubmit={this.onSubmit.bind(this, dispatch)}>
                    <TextInputGroup
                      label="Name"
                      name="name"
                      placeholder="Enter Name"
                      value={name}
                      onChange={this.onFieldsChange}
                      error={errors.name}
                    />

                    <TextInputGroup
                      label="Email"
                      name="email"
                      type="email"
                      placeholder="Enter email"
                      value={email}
                      onChange={this.onFieldsChange}
                      error={errors.email}
                    />

                    <TextInputGroup
                      label="Phone"
                      name="phone"
                      placeholder="Enter Phone"
                      value={phone}
                      onChange={this.onFieldsChange}
                      error={errors.phone}
                    />
                    <input
                      type="submit"
                      className="submit"
                      value="Add Contact"
                      className="btn btn-light btn-block"
                    />
                  </form>
                </div>
              </div>
          );
        }}
      </Consumer>
    );
  }
}

export default AddContact;
