import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Write from "./Write";
import MainBoard from "./MainBoard";
import DetailBoard from "./DetailBoard";
import Facebook from "./Facebook";

const App = () => {
   return (
      <BrowserRouter>
         <Route exact path="/" component={MainBoard} />
         <Route path="/fb" component={Facebook} />
         <Route exact path="/post" component={Write} />
         <Route exact path="/detail/:id" component={DetailBoard} />
      </BrowserRouter>
   );
};

export default App;
