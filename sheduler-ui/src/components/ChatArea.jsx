import { Component } from "react";
import ReactSearchBox from "react-search-box";
class ChatArea extends Component{
    render(){
        return(
            <>
<div className="row">
    <div className="headname">
        Arnold
    </div>
</div>
<div className="messagearea">

</div>
<div className="sendarea">
    <div className="row">
        <div className="col-sm-10">
<ReactSearchBox placeholder="start typing" /></div>
<div className="col-sm-2">
<button class="btn btn-success">send</button></div>
</div>

</div>
</>
        )
    }
}

export default ChatArea