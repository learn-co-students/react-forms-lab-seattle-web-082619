import React from "react";

class LoginForm extends React.Component {
  constructor() {
    super();

    this.state = {
      username: "",
      password: ""
    };
  }

  handleSubmit = (event) => {
    event.preventDefault()
    if (this.state.username && this.state.password) {
      this.props.handleLogin(this.state);
    }
  }

  handleUsernameChange = (event) => {
    this.setState({
      username: event.target.value
    })

  }

  handlePasswordChange = (event) => {
      this.setState({
        password: event.target.value
      })
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <label>
            Username
            <input onChange={this.handleUsernameChange} id="username" name="username" type="text" value={this.state.username} />
          </label>
        </div>
        <div>
          <label>
            Password
            <input onChange={this.handlePasswordChange} id="password" name="password" type="password" value={this.state.password}/>
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
