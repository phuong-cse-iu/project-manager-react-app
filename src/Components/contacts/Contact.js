import React, { Component } from "react";
import { Consumer } from "../../context";

export default class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showContactDetails: false
    };
  }

  onShowContactDetail = e => {
    console.log(e.target);
    this.setState({ showContactDetails: !this.state.showContactDetails });
  };

  deleteHandler = (id, dispatch) => {
    dispatch({type: 'DELETE_CONTACT', payload: id});
  };

  render() {
    const { contact } = this.props;
    const { showContactDetails } = this.state;
    return (
      <Consumer>
        {value => {
          const { dispatch } = value;
          return (
            <div className="card card-body mb-3">
              <h4>
                {contact.name}
                <i
                  onClick={this.onShowContactDetail}
                  className="fas fa-sort-down"
                  style={{ cursor: "pointer" }}
                />
                <i
                  className="fas fa-times"
                  style={{ cursor: "pointer", float: "right", color: "red" }}
                  onClick={this.deleteHandler.bind(this, contact.id, dispatch)}
                />
              </h4>
              {showContactDetails ? (
                <ul className="list-group">
                  <li className="list-group-item">Email: {contact.email}</li>
                  <li className="list-group-item">Phone: {contact.phone}</li>
                </ul>
              ) : null}
            </div>
          );
        }}
      </Consumer>
    );
  }
}
