import React from "react";
 
class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {
      tweet: ""
    };
  }

  handleChange = e => {
      this.setState({
        tweet: e.target.value
      })
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" value={this.state.tweet} onChange={this.handleChange} name="message" id="message" />
        {this.props.maxChars - this.state.tweet.length}
      </div>
    );
  }
}

export default TwitterMessage;
