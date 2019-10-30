import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {
      message: ""
    };
  }

  handleSubmit = (event) => {
    event.preventDefault();
  }

  handleTwitterMessageChange = (event) => {
    let content = event.target.value
    this.setState({
      message: content
    })
  }

  calculateRemainingCharacters = () => {
    let maxChars = this.props.maxChars;
    return maxChars - this.state.message.length
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
          <input onChange={this.handleTwitterMessageChange} type="text" name="message" id="message" value={this.state.message}/>
        <div>{this.calculateRemainingCharacters()} Characters Remaining</div>
      </div>
    );
  }
}

export default TwitterMessage;
