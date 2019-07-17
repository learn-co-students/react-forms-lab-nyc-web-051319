import React from "react";

class TwitterMessage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      message: "",
      messageLength: this.props.maxChars
    };
  }
  changeHandler = (event) => {
    this.setState({
      message: event.target.value,
      messageLength: this.props.maxChars - event.target.value.length 
    })
  }


  

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" name="message" id="message" value={this.state.message} onChange={this.changeHandler}/>
        <p>Remaining Characters: {this.state.messageLength}</p>
      </div>
    );
  }
}

export default TwitterMessage;
