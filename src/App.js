import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Header from './component/Header';
import ShowUser from './component/ShowUser';
import AddUser from './component/AddUser';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Route path="/" exact component={ShowUser} />
        <Route path="/adduser" component={AddUser} />
      </div>
    </Router>
  );
}

export default App;
