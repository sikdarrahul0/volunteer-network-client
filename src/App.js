import React, { createContext, useState } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './Components/Home/Home';
import Login from './Components/Login/Login';
import Registration from './Components/Registration/Registration';
import Events from './Components/Events/Events';
import Admin from './Components/Admin/Admin';
import NoData from './Components/NoData/NoData';
import AddEvent from './Components/AddEvent/AddEvent';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';

export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  return (
    <UserContext.Provider value = {[loggedInUser, setLoggedInUser]}>
      <Router>
        <Switch>
          <Route exact path='/'>
             <Home></Home>
          </Route>
          <Route path='/home'>
             <Home></Home>
          </Route>
          <Route path='/login'>
            <Login></Login>
          </Route>
          <PrivateRoute path='/registration/:name'>
            <Registration></Registration>
          </PrivateRoute>
          <PrivateRoute path='/registration'>
            <Registration></Registration>
          </PrivateRoute>
          <Route path='/events'>
            <Events></Events>
          </Route>
          <Route path='/admin'>
            <Admin></Admin>
          </Route>
          <Route path='/addevent'>
            <AddEvent></AddEvent>
          </Route>
          <Route path='*'>
            <NoData></NoData>
          </Route>
        </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
