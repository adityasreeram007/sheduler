import { Component } from "react";
import UserCard from "./UserCard";
import ReactSearchBox from "react-search-box";
import ChatArea from "./ChatArea";
var users=[
    {name:"Arnold"},{name:"Amjad"}
]
var messages={
    "Arnold":[{"text":"hello","pos":"left"},{"text":"hello","pos":"right"},{"text":"this is text written by arnold to me when he was high .","pos":"right"},{"text":"hello","pos":"right"}
,{"text":"hello","pos":"left"},{"text":"hello","pos":"right"},{"text":"this is text written by arnold to me when he was high .","pos":"right"},{"text":"hello","pos":"right"}
,{"text":"hello","pos":"left"},{"text":"hello","pos":"right"},{"text":"this is text written by arnold to me when he was high .","pos":"right"},{"text":"hello","pos":"right"}
,{"text":"hello","pos":"left"},{"text":"hello","pos":"right"},{"text":"this is text written by arnold to me when he was high .","pos":"right"},{"text":"hello","pos":"right"}
,{"text":"hello","pos":"left"},{"text":"hello","pos":"right"},{"text":"this is text written by arnold to me when he was high .","pos":"right"},{"text":"hello","pos":"right"},
{"text":"hello","pos":"left"},{"text":"hello","pos":"right"},{"text":"this is text written by arnold to me when he was high .","pos":"right"},{"text":"hello","pos":"right"}]
}
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
             
                <div className="col-sm-8 usermessage">
            <ChatArea messages={messages["Arnold"]}/>
                </div>
                </div>
           </div>

        )
    }
}

export default ChatBox