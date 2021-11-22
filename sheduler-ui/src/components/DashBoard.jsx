import { Component } from "react";


import Calendar from "react-awesome-calendar";
import Modal from "react-modal";
import { Button } from "react-bootstrap";
import Card from "./Card";
import History from "./History";
import Form from "./Form";
class DashBoard extends Component {
  state = {
    isOpen: false,
  };

  render() {
    var numbers = [1, 2, 3, 4, 5, 7, 8, 9, 0];
    var list = numbers.map((item) => {
      return <Card key={item} />;
    });
    var list1 = numbers.map((item) => {
      return <History key={item} />;
    });
    return (
      <div class="box">
        <div class="row">
          <div class="messages">
            You can connect with other available platforms in connect tab
          </div>
        </div>
        <div class="row">
          <div class="col-sm-9 head">
            <div class="row">
              <div class="col-sm-10">
                <h3>Events Dashboard</h3>
              </div>
              <div class="col-sm-2">
                <Button
                  variant="light"
                  class="btn"
                  onClick={() => {
                    this.setState({
                      isOpen: true,
                    });
                  }}
                >
                  Schedule
                </Button>
              </div>
            </div>
          </div>
          <div class="col-sm-3 log">
            <h3>Logs</h3>
          </div>
        </div>

        <div class="row">
          <div class="col-sm-9 dashboard">
            <Calendar
              onClickEvent={(data) => {
                console.log(data);
              }}
              onClickTimeLine={(data) => {
                console.log(data);
              }}
            />
          </div>
          <div class="col-sm-3 sideboard">
            <div class="row ">
              <input placeholder="Search" class="inputbox" />

              <h5>Upcoming Events</h5>
              <div class="upcoming">{list}</div>
            </div>
            <div class="row ">
              <h5>History</h5>
              <div class="history">{list1}</div>
            </div>
          </div>
        </div>
        <Modal
          isOpen={this.state.isOpen}
          style={{
            content: {
              top: "50%",
              left: "50%",
              right: "auto",
              bottom: "auto",
              height: "auto",
              width: "40%",
              marginRight: "-50%",
              background: "#343a40",
             
              transform: "translate(-50%, -50%)",
             
            },
          }}
        >
          <div class="row formhead">
            <div class="col-sm-11 ">
              <h6>Event Info</h6>
            </div>

          <div
            onClick={() => {
              this.setState({
                isOpen: false,
              });
            }}

            class="closebutton col-sm-1"
          >
            X
          </div></div>
          <Form />
        </Modal>
      </div>
    );
  }
}

export default DashBoard;
