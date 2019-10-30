import React from "react";

class TwitterMessage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      message: "",
      remainingChars: props.maxChars
    };
  }

  handleValueChange = event => {
    this.setState({
      message: event.target.value,
      remainingChars: this.props.maxChars - event.target.value.length
    })
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" name="message" id="message" value={this.state.message} onChange={this.handleValueChange}/>
        <div>Remaining Characters: {this.state.remainingChars}</div>
      </div>
    );
  }
}

export default TwitterMessage;
