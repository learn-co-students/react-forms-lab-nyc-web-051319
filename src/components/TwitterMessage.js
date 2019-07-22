import React from "react";

class TwitterMessage extends React.Component {

    state = {
      message: ""
    }

    handleChange = event => {
        //  console.log(event.target.value)
      this.setState({
       [event.target.name]: event.target.value
      })
    }
  

  render() {
    // console.log(this.props.maxChars)
    
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" 
        name="message"
        value={this.state.message}
        onChange={this.handleChange}
        id="message" /><br></br>
        <label>Remaining Characters: </label>
        {this.props.maxChars-this.state.message.length}
      </div>
    );
  }
}

export default TwitterMessage;
