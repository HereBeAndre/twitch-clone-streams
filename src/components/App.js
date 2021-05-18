import React from "react";
import { BrowserRouter, Link, Route } from "react-router-dom";

const PageOne = () => {
  return (
    <div>
      <Link to="/pageTwo">Go to page 2</Link>
    </div>
  );
};

const PageTwo = () => {
  return (
    <div>
      <Link to="/">Go to page 1</Link>
    </div>
  );
};

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Route path="/" exact component={PageOne} />
        <Route path="/pageTwo" component={PageTwo} />
      </BrowserRouter>
    </div>
  );
};

export default App;
