import { useState } from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import './App.css';
import Admin from './Components/Admin/Admin';
import Home from './Components/Home/Home';
import Stats from './Components/Stats/Stats';

function App(props) {

  let items = [];

  return (
    <div className="App">
      <BrowserRouter>
        <Route path="/admin" exact>
          <Admin items={items} />
        </Route>
        <Route path="/home" exact>
          <Home items={items} />
        </Route>
        <Route path="/stats" exact>
          <Stats />
        </Route>
      </BrowserRouter>
    </div>
  );
}

export default App;
