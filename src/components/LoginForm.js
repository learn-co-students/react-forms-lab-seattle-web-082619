import React from "react";

class LoginForm extends React.Component {
  constructor() {
    super();

    this.state = {};
  }

  handleSubmit = e => {
    e.preventDefault();
    
    if(this.state.username && this.state.password) {
      if(this.state.username.length > 0 && this.state.password.length > 0) {
        this.props.handleLogin(this.state);
      }
    }
  }

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  render() {
    return (
      <form onSubmit={ e => this.handleSubmit(e) }>
        <div>
          <label>
            Username
            <input id="username" onChange={ e => this.handleChange(e) } value={ this.state.username } name="username" type="text" />
          </label>
        </div>
        <div>
          <label>
            Password
            <input id="password" onChange={ e => this.handleChange(e) } value={ this.state.password } name="password" type="password" />
          </label>
        </div>
        <div>
          <button type="submit">Log in</button>
        </div>
      </form>
    );
  }
}

export default LoginForm;
