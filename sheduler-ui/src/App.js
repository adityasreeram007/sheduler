import React, { Component } from "react";
import Popup from "reactjs-popup";
import DashBoard from "./components/DashBoard";
import "./App.css";
import FrontPage from './components/FrontPage'
import Connect from './components/Connect'
import Button from "@restart/ui/esm/Button";
import { 
   
  Route, 
  BrowserRouter as Router,
  Routes ,Link
} from 'react-router-dom';
class App extends Component {
  state={
    loggedin:false
  }
  authenticated=()=>{
    document.body.style.backgroundColor="white"
this.setState({loggedin:true})
  }
  render() {
    console.log(sessionStorage.getItem('token'))
    return (
      <main>
        {(sessionStorage.getItem('token')!==null)?
        <>
        <Router>
        <nav class="navbar navbar-expand-sm bg-dark">
          
          <ul class="navbar-nav">
            <li class="nav-item-mid">
              <i class="fa fa-calendar" aria-hidden="true"></i> Sheduler
            </li>
            <Link to="/"> <li class="nav-item-mid">Dashboard</li></Link>
            <Link to="/connect"> <li class="nav-item-mid">Connect</li></Link>
          </ul>
          <div class="nav-item-end">
            <ul class="navbar-nav">
              <li class="nav-item-mid">
                <Popup
                  trigger={<div class="profile">A</div>}
                  position="bottom center"
                >
                  <div class="popupcontent">
                    <Button class="btn btn-danger" onClick={()=>{
                      sessionStorage.removeItem('token')
                      this.setState({
                        loggedin:false
                      })
                    }}>logout</Button>
                  </div>
                </Popup>
              </li>
            </ul>
          </div>
         
        </nav>
        <div>
          
          
          <Routes>
          <Route path="/" element={<DashBoard />}/>
          <Route path="/connect" element={<Connect/>}/>
        </Routes>
          
        </div></Router></>:

        <>
        <FrontPage authenticated={this.authenticated}/>
          
        </>}
      </main>
    );
  }
}
export default App;
