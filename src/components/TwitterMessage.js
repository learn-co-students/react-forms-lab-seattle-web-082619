import React from "react";

class TwitterMessage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      message: "", 
      charCount: this.props.maxChars
    };
  }

  handleTweetMessageChange = event => {
    this.setState({
      message: event.target.value,
      charCount: this.props.maxChars - event.target.value.length
    })
    // this.setState({charCount:
  }

 


  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" name="message" id="message" 
        onChange={event => this.handleTweetMessageChange(event)} value={this.state.message}/>
        <div>{this.state.charCount}</div>
      </div>
    );
  }
}



export default TwitterMessage;
