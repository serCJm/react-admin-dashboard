import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";

class Location extends Component {
  state = { liked: false, likes: 1000 };

  handleLikesClick = () => {
    if (!this.state.liked) {
      this.setState({ likes: this.state.likes + 1, liked: true });
    } else if (this.state.likes > 0) {
      this.setState({ likes: this.state.likes - 1, liked: false });
    }
  };
  render() {
    return (
      <div className="header-location">
        <h1 className="header-title">Gallaxy Far Away, SS, FG</h1>
        <p>- Sep 5th, 2018</p>
        <button className="header-likes-btn" onClick={this.handleLikesClick}>
          <span
            className={
              this.state.liked
                ? "header-likes-btn-icon liked"
                : "header-likes-btn-icon"
            }
          >
            <FontAwesomeIcon icon={faHeart} />
          </span>
          {this.state.likes + " likes"}
        </button>
      </div>
    );
  }
}

export default Location;
