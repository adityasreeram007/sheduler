import Button from "@restart/ui/esm/Button";
import { Component } from "react";

class Login extends Component{
    state={
        email:"",
        password:""
    }

    changeEmail=(e)=>{
        console.log(e.target.value)
        this.setState({email:e.target.value})
    }
    changePassword=(e)=>{
        this.setState({password:e.target.value})
    }
    render(){
        return(

            <div class="row">
                
                <div class="col-sm-12 ">
                        <input class="authinput" type="email" placeholder="email" onChange={this.changeEmail} value={this.state.email}/></div>
                        <div class="col-sm-12 ">
                        <input class="authinput" type="password" placeholder="password" onChange={this.changePassword}  value={this.state.password}/></div>


                        <div class="col-sm-12 ">
                            <Button class="btn btn-primary authbutton" onClick={()=>this.props.loginUser(this.state.email,this.state.password)}>Login</Button>
                        </div>
                      </div>

        )
    }
}
export default Login