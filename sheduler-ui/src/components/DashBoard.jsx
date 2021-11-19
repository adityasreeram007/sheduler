import { Component } from "react";

import Calendar from 'react-awesome-calendar';
import Modal from 'react-modal';
import { Button } from 'react-bootstrap'
import Card from './Card'
class DashBoard extends Component{
    state={
      isOpen:false
    }

    render(){
        return (
            <div class="box">
              <div class="row">
               <div class="messages">
                    You can connect with other available platforms in connect tab
                  </div></div>
                  <div class="row">
                  <div class="col-sm-9 head">
                    <div class="row">
                    <div class="col-sm-10">
                  <h3>Events Dashboard</h3>
                  </div>
                  <div class="col-sm-2"><Button variant="light" class="btn" onClick={()=>{
                    this.setState({
                      isOpen:true
                    })
                  }}>Schedule</Button></div></div>
                </div>
                <div class="col-sm-3 log"><h3>Logs</h3></div>
              
                
                </div>

              <div class="row">
                
                <div class="col-sm-9 dashboard">
                  
                 
                  <Calendar onClickEvent={(data)=>{
                    console.log(data)
                  }} 
                  onClickTimeLine={(data)=>{
                    console.log(data)
                  }}/>
                </div>
                <div class="col-sm-3 sideboard">
                  <div class="row ">
                 <Card/>
                  
                    </div>

                </div>
               
              </div>
              <Modal isOpen={this.state.isOpen} style={{content:{
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    height:'50%',
    width:'50%',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  }}} >
    <Button onClick={()=>{
      this.setState({
        isOpen:false
      })
    }}>Close</Button>

              </Modal>
            </div>
            

        
            )

    }
}

export default DashBoard