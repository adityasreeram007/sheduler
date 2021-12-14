import { Component } from "react";

class UserCard extends Component{
    render(){
        return (
            <div className="row usercard">
            
            <div className="col-sm-2">
              <div class="profile">{this.props.data.name[0]}</div>
            </div>
            <div className="col-sm-9">
              
              <div className="name">{this.props.data.name}</div>
            </div>
            </div>
        )
    }
}

export default UserCard