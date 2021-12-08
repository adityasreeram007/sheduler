import Button from "@restart/ui/esm/Button";
import { Component } from "react";

class Register extends Component{
    render(){
        return(
<>
            <div class="row">
                
                <div class="col-sm-12 ">
                        <input class="authinput" type="email" placeholder="email"/></div></div>
                        <div class="row">
                        <div class="col-sm-12 ">
                        <input class="authinput" type="password" placeholder="password"/></div></div>
                        <div class="row"> <div class="col-sm-12 ">
                        <input class="authinput" type="text" placeholder="Name"/></div></div>
                        <div class="row">
                        <div class="col-sm-8 ">
                        <input class="authinput" type="text" placeholder="OTP"/></div>



                        
                        <div class="col-sm-4 "><Button class="btn btn-warning authbutton">GET OTP</Button></div>
                        </div><div class="row">
                        <div class="col-sm-12 ">
                            <Button class="btn btn-info authbutton">Register</Button>
                        </div></div>
                      
                      </>

        )
    }
}
export default Register