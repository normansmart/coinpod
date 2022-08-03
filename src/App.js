import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import SignupForm from './components/SignupForm';
import SigninPage from './components/SigninPage';
import LoginForm from './components/LoginForm';
import DashBoard from './components/DashBoard';
import { useState , useEffect} from 'react';

function App() {


  const [Users , setUsers] = useState({})
  const [Banks , setBanks] = useState([])
  const [Goals , setGoals] = useState([])



useEffect( () => {
  fetch('http://127.0.0.1:3000/users/9')
  .then(response => response.json())
  .then( item => {
    setUsers(item)
    setBanks(item.banks)
    setGoals(item.goals)
   

  })

  
} , [])





  return (
    <div>
      <div className="App">
        <Navbar/>
      </div>
      <div>
       {/* <SigninPage /> */}


        {/* <LoginForm/> */}

        <DashBoard user={Users} banks={Banks} goals={Goals} />
      </div>
    </div>
  );
}

export default App;
