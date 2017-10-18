import React from 'react';
import { Route } from 'react-router-dom';
import HomePage from "./components/pages/HomePage";
import UserPage from "./components/pages/UserPage";

const App = () =>
<div className="ui container">
  <Route path="/" exact component={HomePage} />
  <Route path="/user" exact component={UserPage} />
</div>

export default App;
