import React from "react";
export default class Loader extends React.Component {
  render() {
    return (
      <div className="Loading">
        <div className="spinner-border" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    );
  }
}
