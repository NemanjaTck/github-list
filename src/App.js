import React from 'react';
import { Route } from 'react-router-dom';
import List from './components/List';
import User from './components/User';

const App = () =>
<div className="ui container">
  <Route path="/" exact component={List}/>
  <Route path="/user/:login" exact component={User}/>
</div>

export default App;
