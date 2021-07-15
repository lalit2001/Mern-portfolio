
import './App.css';
import Navbar from "./components/Navbar";
import {Route,Switch} from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Login from './components/Login';
import Signup from './components/Signup';
import Contact from './components/Contact';
import ErrorData from './components/ErrorData';
import Logout from './components/Logout';
import { createContext ,useReducer} from 'react';
import { initialState,reducer } from './reducer/UseReducer';


export const UserContext=createContext()
function App() {

  
  const [state, dispatch] = useReducer(reducer, initialState);

  const Routing=()=>{
    return(
      <Switch>
      <Route exact path='/'>
        <Home/>
      </Route>
      
      <Route exact path='/about'>
        <About/>
      </Route>

      <Route exact path='/contact'>
        <Contact/>
      </Route>

      <Route exact path='/login'>
        <Login />
      </Route>
      
      <Route exact path='/signup'>
        <Signup/>
      </Route>

      <Route exact path='/logout'>
        <Logout/>
      </Route>


      <Route path='*'>
        <ErrorData/>
      </Route>
      </Switch>
    )
  }

  return (
    
    <>
    <UserContext.Provider value={{state,dispatch}}>
      <Navbar/>
    <Routing/>
      </UserContext.Provider>
    </>
  );
}

export default App;
