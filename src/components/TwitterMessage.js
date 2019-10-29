import React from "react";

class TwitterMessage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      remainingChars: props.maxChars
    };
  }

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value,
      remainingChars: this.props.maxChars - e.target.value.length
    })
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" onChange={ e => this.handleChange(e) } value={ this.state.message } name="message" id="message" />
        <p>{this.state.remainingChars}</p>
      </div>
    );
  }
}

export default TwitterMessage;
