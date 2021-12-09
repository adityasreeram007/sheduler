import Button from "@restart/ui/esm/Button";
import { Component } from "react";
import TextTransition, { presets } from "react-text-transition";
import Modal from "react-modal";
import Login from './Login'
import Register from './Register'
import axios from 'axios'
import Notification  from "./Notification";
var Icon={
  fail:"far fa-times-circle",
  success:"fas fa-check-circle"
}
class FrontPage extends Component {
  state={
    text:["Keep You Meeting handy with Scheduler","The one","Schedule on the go with Sheduler","Keep Participants Informed about the meeting"],
    index:0,
    action:"None",
    isOpen:false,
    login:false,
    register:false,
    notification:false,
    notificationMessage:"",
    notificationIcon:""
    
  }
  componentDidMount=()=>{
   
    document.body.style.backgroundColor="black"
    document.body.style.overflowY="hidden"
    setInterval(() =>
    this.setState({index : (this.state.index + 1)%this.state.text.length}),
    3000 // every 3 seconds
  );

  }
  loginUser=async (username,password)=>{
    return await axios.post('http://localhost:5000/login',{email:username,password:password}).then((data,err)=>{
      console.log(data)
    if(err || data.data===false){
        this.setState({
          notification:true,
          notificationMessage:"Username/Password Incorrect",
          notificationIcon:Icon.fail
        })
        return false
      }
      sessionStorage.setItem('token',data.data)
      this.props.authenticated()
      return true
    })

  }
  registerUser=(username,password,name,otp)=>{

  }

  stopNotification=()=>{
    this.setState({
      notification:false
    })
  }
  render() {
    return (
      <>
      {this.state.notification?
      <Notification stopNotification={this.stopNotification} message={this.state.notificationMessage}
      icon={this.state.notificationIcon}/>:""}
        <nav class="navbar navbar-expand-sm " style={{backgroundColor:"black"}}>
          <ul class="navbar-nav">
            <li class="nav-item-mid">
              <i class="fa fa-calendar" aria-hidden="true"></i> Sheduler
            </li>
          </ul>
          <div class="nav-item-end">
            <ul class="navbar-nav">
              <li class="nav-item-mid"> <Button class="btn btn-dark" onClick={()=>{
                this.setState({isOpen:true,login:true,register:false})
              }}>Login</Button></li>
            </ul>
          </div>
          <div class="nav-item-end">
            <ul class="navbar-nav">
              <li class="nav-item-mid"> <Button class="btn btn-warning" onClick={()=>{
                this.setState({isOpen:true,register:true,login:false})
              }}>Register</Button></li>
            </ul>
          </div>
        </nav>
        
        <div class="largetext">
          <h1><TextTransition
    text={this.state.text[this.state.index] }
    springConfig={ presets.wobbly }
  /></h1>
        </div>
        
        <Modal
          isOpen={this.state.isOpen}
          style={{
            content: {
              top: "50%",
              left: "50%",
              right: "auto",
              bottom: "auto",
              height: "auto",
              width: "35%",
              marginRight: "-50%",
              background: "#343a40",
             
              transform: "translate(-50%, -50%)",
             
            },
          }}
        >
          <div class="row formhead">
            <div class="col-sm-11 ">
              <h6>WelCome! SignIn/SignUp</h6>
            </div>

          <div
            onClick={() => {
              this.setState({
                isOpen: false,
              });
            }}

            class="closebutton col-sm-1"
          >
            X
          </div></div>
          {this.state.register?<Register/>:""}
          {this.state.login?<Login loginUser={this.loginUser}/>:""}
          
        </Modal>
          
          
        
      </>
    );
  }
}

export default FrontPage;
