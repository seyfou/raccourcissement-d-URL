import SignIn from './components/connection/SignIn';
import {Switch, Route} from "react-router-dom";
import { current } from './js/actions/user';
import './App.css';
import Navbar  from "./components/Navbar";
import Home from "./components/Home"
import Services from "./components/services/Services"
import Dashbord from "./components/admin/Dashbord";
import UserProfile from "./components/admin/UserProfile"
import PrivateRouteA from "./components/router/PrivateRouteA"
import PrivateRouteP from "./components/router/PrivateRouteP"
import UserTab from "./components/admin/UserTab"
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import Welcome from './components/services/Welcome';

function App() {
 const dispatch = useDispatch()
 const getUser = ()=>dispatch(current())
 useEffect(() => {getUser()},[])

  return (
    <div className="App">
   
     <Navbar />
     
   
 <Switch>
       <Route path="/confirm/:confirmationCode" component={Welcome} />
       <Route exact path="/" component={Home} />   
       <Route  path="/signIn" component={SignIn} />    
       <Route  path="/services" component={Services}/>  
       <PrivateRouteA  path="/dashbord" component={Dashbord}/> 
       <PrivateRouteP  exact path="/userProfile" component={UserProfile}/>  
       <Route  path="/userTab" component={UserTab} /> 
       
     
  </Switch>
    </div>
  );
}

export default App;