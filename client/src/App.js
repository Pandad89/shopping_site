import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import './App.css';
import Admin from './Components/Admin/Admin';
import Home from './Components/Home/Home';
import Stats from './Components/Stats/Stats';

let items = [];
let renderer = 0;

function App(props) {

  const handleRender = () => {
    renderer = renderer + 1;
}

  return (
    <div className="App">
      <div className="renderer">{renderer}</div>
      <Router>
      <div>
        <Link to={"/"}>
          <button onClick={handleRender}>Home</button>
        </Link>
        <Link to={"/admin"}>
          <button onClick={handleRender}>Admin</button>
        </Link>
        <Link to={"/stats"}>
          <button onClick={handleRender}>Stats</button>
        </Link>
      </div>
        <Routes>
          <Route path="/" exact element={<Home items={items} renderer={renderer} />} />
          <Route path="/admin" exact element={<Admin items={items} renderer={renderer} />} />
          <Route path="/stats" exact element={<Stats items={items} renderer={renderer} />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
