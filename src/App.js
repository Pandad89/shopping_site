import { useState } from 'react';
import './App.css';
import Admin from './Components/Admin/Admin';
import Home from './Components/Home/Home';

function App(props) {
  
  const [items, setItems] = useState([]); 


  return (
    <div className="App">
      <Admin items={items} />
      <Home items={items} />
    </div>
  );
}

export default App;
