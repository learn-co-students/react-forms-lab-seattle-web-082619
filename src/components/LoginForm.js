import React from "react";

class LoginForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      username: '',
      password: ''
    };
  }

  handleInputUsernameChange=(event)=>{
    this.setState({
      username: event.target.value, 
    })
  }
 
  handleInputPasswordChange =(event)=>{
    this.setState({
      password: event.target.value,
    })
  }

  handleSubmitForm = (event) =>{
    event.preventDefault();
    if(!this.state.username || !this.state.password){
    }else{
      return this.props.handleLogin(this.state)
    }  
  }

  render() {
    return (
      <form  onSubmit={this.handleSubmitForm}>
        <div>
          <label>
            Username
            <input 
            id="username" 
            name="username" 
            type="text"
            username={this.state.username}
            onChange={this.handleInputUsernameChange}
            />
          </label>
        </div>
        <div>
          <label>
            Password
            <input 
            id="password" 
            name="password" 
            type="password" 
            password={this.state.password}
            onChange={this.handleInputPasswordChange}
            />
          </label>
        </div>
        <div>
          <button 
            type="submit"
          >Log in</button>
        </div>
      </form>
    );
  }
}

export default LoginForm;
