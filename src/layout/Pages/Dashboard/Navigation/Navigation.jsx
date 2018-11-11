import React, { Component } from "react";
import { ReactBingmaps } from "react-bingmaps";

class Navigation extends Component {
  state = {
    directions: {
      inputPanel: "inputPanel",
      renderOptions: { itineraryContainer: "itineraryContainer" },
      requestOptions: { routeMode: "driving", maxRoutes: 2 },
      wayPoints: [
        {
          address: ""
        },
        {
          address: ""
        }
      ]
    }
  };
  render() {
    return (
      <React.Fragment>
        <div className="navigation-container">
          <ReactBingmaps
            bingmapKey={process.env.REACT_APP_BING_KEY}
            center={[37.37, -122.04]}
            directions={this.state.directions}
          />
        </div>
        <div className="navigation-directions">
          <div className="direction-container">
            <div className="input-panel" id="inputPanel" />
            <div className="itinerary-container" id="itineraryContainer" />
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Navigation;
