import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Write from "./Write";
import MainBoard from "./MainBoard";

const App = () => {
   return (
      <BrowserRouter>
         <Route exact path="/" component={Write} />
         <Route exact path="/board" component={MainBoard} />
      </BrowserRouter>
   );
};

export default App;
