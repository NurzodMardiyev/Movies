import React from "react";

class App extends React.Component {
  state = {
    count: 0,
    isCounting: false,
  };

  componentDidMount() {
    console.log("componentDidMount");
    const userCount = localStorage.getItem("timer");
    if (userCount) {
      this.setState({ count: +userCount });
    }
  }
  componentDidUpdate() {
    console.log("componentDidUpdate");
    localStorage.setItem("timer", this.state.count);
  }

  handleStart = () => {
    this.setState({ isCounting: true });
    this.counterID = setInterval(() => {
      this.setState({ count: this.state.count + 1 });
    }, 1000);
  };
  handleStop = () => {
    this.setState({ isCounting: false });
    clearInterval(this.counterID);
  };

  handleReset = () => {
    this.setState({ isCounting: false, count: 0 });
    clearInterval(this.counterID);
  };
  render() {
    return (
      <>
        <h1 className="name">Hello Nurzod</h1>
        <p>{this.state.count}</p>
        {!this.state.isCounting ? (
          <button onClick={() => this.handleStart(this.handleStart)}>
            Start
          </button>
        ) : (
          <button onClick={() => this.handleStop(this.handleStop)}>Stop</button>
        )}
        <button onClick={() => this.handleReset(0)}> reset </button>
      </>
    );
  }
}

export default App;
