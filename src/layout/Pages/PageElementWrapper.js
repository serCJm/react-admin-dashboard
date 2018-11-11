import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSyncAlt } from "@fortawesome/free-solid-svg-icons";

class PageElementWrapper extends Component {
  state = {
    controlsMenu: false,
    minimize: false,
    showElement: true
  };

  handleHover = () => {
    this.setState(prevState => ({ controlsMenu: !prevState.controlsMenu }));
  };

  handleMinimize = () => {
    this.setState(prevState => ({ minimize: !prevState.minimize }));
  };

  handleClose = () => {
    this.setState(prevState => ({ showElement: !prevState.showElement }));
  };

  render() {
    let controlsMenuClass = "page-element-controls";
    if (this.state.controlsMenu) {
      controlsMenuClass += " show";
    }
    let pageElementClass = "page-element";
    if (this.state.minimize) {
      pageElementClass += " minimize";
    }
    return (
      <div
        className={`page-element-container ${this.props.classId}`}
        onMouseOver={this.handleHover}
        onMouseOut={this.handleHover}
      >
        {this.state.showElement ? (
          <div className={pageElementClass}>
            <div className={controlsMenuClass}>
              <span className="page-element-controls-item">
                <FontAwesomeIcon icon={faSyncAlt} />
              </span>
              {this.state.minimize ? (
                <span
                  className="page-element-controls-item"
                  onClick={this.handleMinimize}
                >
                  &#43;
                </span>
              ) : (
                <span
                  className="page-element-controls-item"
                  onClick={this.handleMinimize}
                >
                  &#8722;
                </span>
              )}
              <span
                className="page-element-controls-item"
                onClick={this.handleClose}
              >
                &times;
              </span>
            </div>
            {this.props.children}
          </div>
        ) : null}
      </div>
    );
  }
}

export default PageElementWrapper;
