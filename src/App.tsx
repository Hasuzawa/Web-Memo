import React from 'react';
import './App.css';
import {Link} from "react-router-dom"

function App() {
  return (
    <div>
      <h1>this is the root page</h1>
      <li>
        <Link to="/notice-board" >The Notice Board</Link>
        
      </li>
    </div>
    
  )
}

export default App;
