import React, { Component } from 'react';
import axios from 'axios';

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      message: '',
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    const inputValue = event.target.value;
    const stateField = event.target.name;
    this.setState({
      [stateField]: inputValue,
    });
    console.log(this.state);
  }
  async handleSubmit(event) {
    event.preventDefault();
    const { name, message } = this.state;
    await axios.post(
        'https://rfwis726h1.execute-api.us-east-2.amazonaws.com/default/serverlessAppFunction',
        { key1: `${name}, ${message}` }
    );
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>Name:   </label>
          <input
            type="text"
            name="name"
            onChange={this.handleChange}
            value={this.state.name}
          />
            <br />
          <label>Message:   </label>
          <input
            type="text"
            name="message"
            onChange={this.handleChange}
            value={this.state.message}
          />
            <br />

          <button type="submit">Send</button>
        </form>
      </div>
    );
  }
}


export default Form