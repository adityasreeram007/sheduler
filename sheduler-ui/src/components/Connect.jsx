import { Component } from "react";
import PlatformCard from "./PlatformCard";
import FriendsCard from "./FriendsCard";
var platforms=[
    {
    name:"Google Calendar",
    icon:"fa fa-calendar"
}, {
    name:"WhatsApp",
    icon:"fab fa-whatsapp"
}, {
    name:"Telegram",
    icon:"fab fa-telegram-plane"
}, {
    name:"Signal",
    icon:"fab fa-stripe-s"
},]
class Connect extends Component{
render(){
    var list1 = platforms.map((item) => {
        
        return <PlatformCard key={item} data={item} />;
      });
    return (
        <div class="container">
            <div className="connecthead">
                <h3>Select Any Platform to Connect</h3>
            </div>
            {list1}
            <div className="connecthead">
                <h3>Connect with your Friends on Sheduler</h3>
            </div>
            <FriendsCard/>

        </div>

    )
}
}

export default Connect