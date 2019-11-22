import React from "react";
import ReactDOM from "react-dom";
import "react-quill/dist/quill.bubble.css";
import "./index.css";
import Root from "./Root";
import * as serviceWorker from "./serviceWorker";

ReactDOM.render(<Root />, document.getElementById("root"));

serviceWorker.unregister();
