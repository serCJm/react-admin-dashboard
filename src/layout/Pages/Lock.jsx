import React, { Component } from "react";
import Avatar from "../../images/avatar.jpg";
import { AuthContext } from "../../components/Header/auth-context";
import { withRouter } from "react-router-dom";

class Lock extends Component {
  state = { time: new Date() };

  componentDidMount() {
    this.timerID = setInterval(() => this.tick(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    this.setState({
      time: new Date()
    });
  }

  handleSubmit = (e, handleAuthentication) => {
    e.preventDefault();
    handleAuthentication();
    this.props.history.push("/");
  };

  render() {
    return (
      <AuthContext.Consumer>
        {({ handleAuthentication }) => (
          <div className="lock">
            <div className="lock-container">
              <h1 className="lock-time">
                {this.state.time.toLocaleTimeString()}
              </h1>
              <h2 className="lock-date">{this.state.time.toDateString()}</h2>
              <form
                className="lock-form"
                action="/dashboard"
                onSubmit={e => this.handleSubmit(e, handleAuthentication)}
              >
                <label className="lock-form-label" htmlFor="lockScreen">
                  CJ Moro
                </label>
                <img
                  className="lock-form-img"
                  src={Avatar}
                  alt="avatar"
                  width="150"
                  height="150"
                />
                <input
                  className="lock-form-pass"
                  id="lockScreen"
                  type="password"
                  placeholder="password"
                  required
                />
                <button className="lock-form-btn" />
              </form>
            </div>
          </div>
        )}
      </AuthContext.Consumer>
    );
  }
}

export default withRouter(Lock);
