import React from "react";
import { Router, Route, Switch } from "react-router-dom";
import Header from "./Header";
import StreamCreate from "./streams/StreamCreate";
import StreamDelete from "./streams/StreamDelete";
import StreamEdit from "./streams/StreamEdit";
import StreamList from "./streams/StreamList";
import StreamShow from "./streams/StreamShow";

import history from "../history";

const App = () => {
  return (
    <div className="ui container">
      {/* To use custom history, make use of custom router -
      (BrowserRouter uses its own history and wouldn't accept custom history) */}
      <Router history={history}>
        {/* Switch forbids React to show multiple components when a URL seems to match another one */}
        <Switch>
          <Header />
          <Route path="/" exact component={StreamList} />
          <Route path="/streams/new" exact component={StreamCreate} />
          {/* Colon evaluates as variable */}
          <Route path="/streams/edit/:id" exact component={StreamEdit} />
          <Route path="/streams/delete/:id" exact component={StreamDelete} />
          <Route path="/streams/:id" exact component={StreamShow} />
        </Switch>
      </Router>
    </div>
  );
};

export default App;
