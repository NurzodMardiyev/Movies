import React from "react";

export default class Form extends React.Component {
  constructor() {
    super();
    this.state = {
      visaName: "",
      cv: "",
      name: "",
    };
    this.cardRef = React.createRef();
    this.cvRef = React.createRef();
    this.nameRef = React.createRef();
  }

  changeHandle = (e) => {
    this.setState({ [e.target.name]: e.target.value }, () => {
      if (this.state.visaName.length === 16) {
        this.cvRef.current.focus();
      }
      if (this.state.cv.length === 3) {
        this.nameRef.current.focus();
      }
    });
  };

  componentDidMount() {
    this.cardRef.current.focus();
  }

  render() {
    const { visaName, cv, name } = this.state;
    return (
      <div>
        <h1>Form</h1>
        <div>
          <input
            type="text"
            name="visaName"
            placeholder="VISA Number"
            value={visaName}
            onChange={this.changeHandle}
            ref={this.cardRef}
          ></input>
          <input
            type="text"
            placeholder="CV"
            name="cv"
            value={cv}
            onChange={this.changeHandle}
            ref={this.cvRef}
          ></input>
        </div>
        <input
          type="text"
          placeholder="Name"
          name="name"
          value={name}
          onChange={this.changeHandle}
          ref={this.nameRef}
        ></input>
        <button>Send</button>
      </div>
    );
  }
}
