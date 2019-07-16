import React from "react";

class TwitterMessage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      tweet: '',
      maxChars: this.props.maxChars
    };
  }

  handleChange = (e) => {
    this.setState({
      tweet: e.target.value,
      maxChars: this.state.maxChars - 1
    })
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" name="message" id="message" value={this.state.tweet} onChange={this.handleChange} />
        <small>{this.state.maxChars}</small>
      </div>
    );
  }
}

export default TwitterMessage;
