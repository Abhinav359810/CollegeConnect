import React from 'react';
import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Login from './components/Login';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Home />
      <About />
      <Contact />
      <Login />
    </div>
  );
}

export default App;
