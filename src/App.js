import React from 'react'
import './App.css';
import { Switch, Route } from "react-router-dom";
import Home from './components/Home'
import Football from './components/Football'
import Weather from './components/Weather'
const App = () => {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/football" component={Football} />
        <Route exact path="/weather" component={Weather} />
      </Switch>
    </div>
  );
}

export default App;



