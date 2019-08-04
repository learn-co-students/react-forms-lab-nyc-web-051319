import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {
      input: ""
    };
  }

  handleChange = (event) => {
    console.log(event.target.value)
    this.setState({
      input: event.target.value
    })

  }

  render() {
    console.log(this.props.maxChars - this.state.input.length)
    return (
      <div>
        <strong>Your message:</strong>
        <input onChange={(event)=>this.handleChange(event)} type="text" name="message" id="message" value={this.state.input} />
        <p>{this.props.maxChars - this.state.input.length}</p>
      </div>
    );
  }
}

export default TwitterMessage;
