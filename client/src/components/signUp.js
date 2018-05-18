import React from 'react';
import axios from 'axios';

class SignUp extends React.Component {
  state = {
    username: '',
    password: '',
  };

  render() {
    return (
      <form onSubmit={this.submitHandler}>
        <div>
          <label htmlFor="username" />
          <input
            name="username"
            value={this.state.username}
            onChange={this.inputHandler}
            type="text"
          />
        </div>
        <div>
          <label htmlFor="password" />
          <input
            name="password"
            value={this.state.password}
            onChange={this.inputHandler}
            type="password"
          />
        </div>
        <div>
          <button>Register</button>
        </div>
      </form>
    );
  }

  inputHandler = event => {
    const { name, value } = event.target;

    this.setState({ [name]: value });
  };

  submitHandler = event => {
    event.preventDefault();

    axios
      .post('http://localhost:5000/api/users', this.state)
      .then(response => {
        localStorage.setItem('token', response.data.token);

        this.props.history.push('/login');
      })
      .catch(err => {
        console.log(err)
      });
  };
}

export default SignUp;