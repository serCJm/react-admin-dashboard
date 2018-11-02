import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

class FriendsSearch extends Component {
  state = {
    textInput: ""
  };

  handleTextChange = e => {
    this.setState({ textInput: e.target.value });
  };
  handleClick = e => {
    e.preventDefault();
  };
  render() {
    return (
      <form>
        <fieldset className="friends-search">
          <input
            className="friends-search-field"
            type="search"
            placeholder="Type a name here..."
            value={this.state.textInput}
            onChange={this.handleTextChange}
          />
          <button className="friends-search-btn" onClick={this.handleClick}>
            <FontAwesomeIcon icon={faSearch} />
          </button>
        </fieldset>
        <p className="friends-search-checkbox">
          <input type="checkbox" /> Invite friends only
        </p>
      </form>
    );
  }
}

export default FriendsSearch;
