import React from 'react';
import { HashRouter, Switch, Route } from 'react-router-dom';
import Login from './components/Login';
import PickRoute from './components/PickRoute';
import PickTruck from './components/PickTruck';
import StopList from './components/StopList';
import StopDetail from './components/StopDetail';

function App() {
  return (
    <HashRouter>
      <Switch>
        <Route path="/" exact component={Login} />
        <Route path="/route" exact component={PickRoute} />
        <Route path="/truck" exact component={PickTruck} />
        <Route path="/stoplist" exact component={StopList} />
        <Route path="/stopdetail" exact component={StopDetail} />
      </Switch>
    </HashRouter>
  );
}

export default App;
