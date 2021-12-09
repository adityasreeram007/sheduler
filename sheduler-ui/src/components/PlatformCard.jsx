import { Component } from "react";
import Button from "@restart/ui/esm/Button";

class PlatformCard extends Component{
    render(){
        return(
<>
            <div class="platformcard">
                <div className="row">
                    <div className="col-sm-10">
              <i class={this.props.data.icon} aria-hidden="true"></i>  {this.props.data.name}
              </div>
              <div className="col-sm-2"><Button class="btn btn-info connectbtn">connect</Button></div>
              </div>

            </div>
            
            </>
        )
    }
}

export default PlatformCard