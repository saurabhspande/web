import React from 'react';
import "./App.css";
import Navbar from './componants/Navbar';
import Login from './componants/Login';
import Home from './componants/Home';
import Signup from './componants/Signup';
import Profile from './componants/Profile';
import CreatePost from './componants/CreatePost';
import {Route} from 'react-router-dom';

const App = () => {
  return (
    <>
      <Navbar />
      <Route exact path='/'>
        <Home />
      </Route>
      <Route exact path='/login'>
        <Login />
      </Route>
      <Route exact path='/signup'>
        <Signup />
      </Route>
      <Route exact path='/profile'>
        <Profile />
      </Route>
      
      <Route exact path='/createpost'>
        <CreatePost />
      </Route>
      
    </>
  )
}
export default App