import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Write from "./Write";
import MainBoard from "./MainBoard";
import DetailBoard from "./DetailBoard";

const App = () => {
   return (
      <BrowserRouter>
         <Route exact path="/" component={Write} />
         <Route exact path="/board" component={MainBoard} />
         <Route exact path="/detail" component={DetailBoard} />
      </BrowserRouter>
   );
};

export default App;
