import React, { Component } from "react";
import Popup from "reactjs-popup";
import DashBoard from "./components/DashBoard";
import "./App.css";
import FrontPage from './components/FrontPage'
import Button from "@restart/ui/esm/Button";

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
        <nav class="navbar navbar-expand-sm bg-dark">
          <ul class="navbar-nav">
            <li class="nav-item-mid">
              <i class="fa fa-calendar" aria-hidden="true"></i> Sheduler
            </li>
            <li class="nav-item-mid">Dashboard</li>
            <li class="nav-item-mid">Connect</li>
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
          <DashBoard />
        </div></>:

        <>
        <FrontPage authenticated={this.authenticated}/>
          
        </>}
      </main>
    );
  }
}
export default App;
