
import { Component } from "react";
class Notification extends Component{
    state={
        opacity:0.8
    }
    componentDidMount=()=>{
        this.setState({
            opacity:0.8
        })
    }
    componentDidUpdate=()=>{
       
        
        setTimeout(()=>{this.setState({opacity:this.state.opacity-0.1})},300)
        if(this.state.opacity<0.0){
            this.props.stopNotification()
        }

    }

    render(){
        // console.log(this.state.opacity)

        return (
            <>
            
            <div class="notification-card" style={{opacity:this.state.opacity,color:"red"}}>
            <i class={this.props.icon}></i> {this.props.message}
            </div>
            </>
        )
    }
}

export default Notification