import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import SignupForm from './components/SignupForm';
import SigninPage from './components/SigninPage';
import LoginForm from './components/LoginForm';
import DashBoard from './components/DashBoard';
import PodsPage from './components/PodsPage';
import { useState, useEffect } from 'react';

function App() {


  const [currentUserId, setCurrentUserId] = useState(null)
  const [users, setUsers] = useState([])
  const [banks, setBanks] = useState([])
  const [goals, setGoals] = useState([])
  const [commits, setCommits] = useState([])

  useEffect(() => {
    fetch("/me")
      .then(r => r.json())
      .then((user) => {
        if (user.id) {
          setCurrentUserId(user.id)
          setUsers(user)
          setBanks(user.banks)
          setGoals(user.goals)
          setCommits(user.commits)
        }
      })
  }, [])

  function onLogin(userId) {
    setCurrentUserId(userId)
    console.log(`logged in user ${userId}`)

    fetch("/me")
      .then(r => r.json())
      .then(user => {
        setUsers(user)
        setBanks(user.banks)
        setGoals(user.goals)
        setCommits(user.commits)
      })
  }

}








return (
  <div>
    <div className="App">
      <Navbar currentUserId={currentUserId} logout={logout} />
    </div>
    <div>
      <SignupForm onLogin={onLogin} currentUserId={currentUserId} />
      <LoginForm onLogin={onLogin} currentUserId={currentUserId} />
      {/* <SigninPage /> */}

      {/*  <DashBoard user={Users} banks={Banks} goals={Goals} /> */}
      <PodsPage user={users} banks={banks} goals={goals} />
    </div>
  </div>
);

export default App;
