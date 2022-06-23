import React from "react";

export default class Form extends React.Component {
  state = {
    email: "",
    subscription: false,
    button: "",
  };

  changeHandle = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  checkedHendler = (e) => {
    this.setState({ [e.target.name]: e.target.checked });
  };

  hendleSubmit = () => {
    const regex =
      /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i;
    const isValidEmail = regex.test(this.state.email);
    const isValidChecked = this.state.subscription;

    if (!isValidEmail) {
      alert("mana senga");
      return;
    }

    if (!isValidChecked) {
      alert("sen hamma qonunga rozi bo'");
      return;
    }

    this.setState({ email: "", subscription: false });

    alert("Sizga ko'pdan ko'p raxmati kalon");
  };
  render() {
    const { email, subscription, button } = this.state;
    return (
      <div>
        <h1>Form</h1>
        <input
          type="email"
          placeholder="Email..."
          name="email"
          value={email}
          onChange={this.changeHandle}
        ></input>
        <label>
          <input
            name="subscription"
            type="checkbox"
            checked={subscription}
            onChange={this.checkedHendler}
          />
          Do you agree to everything?
        </label>
        <button
          name="button"
          value={button}
          onClick={this.hendleSubmit}
          type="button"
        >
          Sand
        </button>
      </div>
    );
  }
}
