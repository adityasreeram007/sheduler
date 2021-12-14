import { Component } from "react";
import UserCard from "./UserCard";
import ReactSearchBox from "react-search-box";
import ChatArea from "./ChatArea";
var users=[
    {name:"Arnold"},{name:"Amjad"}
]
class ChatBox extends Component{
    render(){
        var friends=users.map((item)=>{
            return <UserCard data={item}/>

        })
        return (

            <div class="container">
                <div className="row chatbox">
                <div className="col-sm-4 userlist">
                    <div className="row chatsearch">
                    <ReactSearchBox placeholder="Search" />
                </div>
                    
                {
                    friends
                }
                </div>
             
                <div className="col-sm-8">
                    <ChatArea messages={{}}/>
                </div>
                </div>
           </div>

        )
    }
}

export default ChatBox