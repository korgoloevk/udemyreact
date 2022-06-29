import "./test.css";
import React from "react";

class Test extends React.Component {
  constructor(props) {
    super();
    this.number = props.number;
    this.head = props.head;
    this.text = "text";

    this.state = {
      number: this.number,
      head: this.head,
      text: this.text,
    };
  }

  numF = () => {
    this.setState({ number: +this.state.number + 1 });
  };

  headF = () => {
    this.setState({ head: this.state.head + " " + this.head });
  };

  changeText = (e) => {
    console.log("hello");
    this.setState({ text: e.target.value });
  };

  render() {
    const { text, head, number } = this.state;
    return (
      <div>
        <h2 onClick={this.headF}>{head}</h2>
        <p onClick={this.numF}>{number}</p>
        <p>{text}</p>
        <input type="text" onChange={this.changeText} />
      </div>
    );
  }
}

export default Test;
