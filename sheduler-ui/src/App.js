import React, {Component} from 'react';
import { Navbar,Nav,NavDropdown,Container } from 'react-bootstrap'
import DashBoard from './components/DashBoard';
import './App.css'
class App extends Component{
  render(){
      return (
        <main>
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
                <li class="nav-item-mid"><div class="profile">A</div></li>
              </ul>
            </div>
          </nav>
          <div>
            <DashBoard/>
          </div>
        </main>
      );


  }
}
export default App