import Button from "@restart/ui/esm/Button";
import { Component } from "react";
class FriendsCard extends Component {
  render() {
    return (
      <div class="friendcard">
        <div className="row">
          {" "}
          <div className="col-sm-1">
            <div class="profile">A</div>
          </div>
          <div className="col-sm-9">
            {" "}
            <div className="name">Arnold</div>{" "}
          </div>
          <div className="col-sm-2">
            <Button class="btn btn-info connectbtn">connect</Button>
          </div>
        </div>
      </div>
    );
  }
}

export default FriendsCard;
