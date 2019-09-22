import "normalize.css/normalize.css";
import React from "react";
import ReactDOM from "react-dom";
//import "./globals";
import "./index.css";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";

ReactDOM.render(<App />, document.getElementById("root"));
registerServiceWorker();
