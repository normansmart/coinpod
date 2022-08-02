import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import SignupForm from './components/SignupForm';
import LoginForm from './components/LoginForm';

function App() {
  return (
    <div>
      <div className="App">
        <Navbar/>
      </div>
      <div>
        <SignupForm/>
        <LoginForm/>
      </div>
    </div>
  );
}

export default App;
