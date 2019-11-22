import React from "react";

import { Provider } from "mobx-react";
import stores from "./stores";

import App from "./containers/App";

const Root = () => (
   <Provider {...stores}>
      <App />
   </Provider>
);

export default Root;
