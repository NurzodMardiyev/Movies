import React from "react";

export default class Search extends React.Component {
  state = {
    search: "panda",
    type: "all",
  };

  handleKey = (e) => {
    if (e.key === "Enter") {
      this.props.searchMovie(this.state.search, this.state.type);
      e.preventDefault();
    }
  };

  handleFilter = (e) => {
    this.setState(
      () => ({ type: e.target.dataset.type }),
      () => {
        this.props.searchMovie(this.state.search, this.state.type);
      }
    );
  };

  render() {
    return (
      <>
        <form className="d-flex" role="search">
          <input
            id="inline_input"
            className="form-control me-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
            value={this.state.search}
            onChange={(e) => this.setState({ search: e.target.value })}
            onKeyDown={this.handleKey}
          />
          <button
            className="btn btn-outline-success"
            type="submit"
            onClick={(e) => {
              this.props.searchMovie(this.state.search);
              e.preventDefault();
            }}
          >
            Search
          </button>
        </form>
        <div className="form-check">
          <input
            className="form-check-input"
            type="radio"
            name="radio"
            id="exampleRadio"
            value="option1"
            data-type="all"
            onChange={this.handleFilter}
            checked={this.state.type === "all"}
          />
          <label classname="form-check-label" for="exampleRadio" />
          All
        </div>
        <div className="form-check">
          <input
            className="form-check-input"
            type="radio"
            name="radio"
            id="exampleRadio"
            data-type="series"
            onChange={this.handleFilter}
            checked={this.state.type === "series"}
          />
          <label classname="form-check-label" for="exampleRadio" />
          Series only
        </div>
        <div className="form-check">
          <input
            className="form-check-input"
            type="radio"
            name="radio"
            id="exampleRadio"
            value="option1"
            data-type="movie"
            onChange={this.handleFilter}
            checked={this.state.type === "movie"}
          />
          <label classname="form-check-label" for="exampleRadio" />
          Movies only
        </div>
      </>
    );
  }
}
