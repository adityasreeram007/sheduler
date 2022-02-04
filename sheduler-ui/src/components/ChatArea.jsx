import React, { Component } from "react";
import ReactSearchBox from "react-search-box";
class ChatArea extends Component {
  constructor(props){
    super(props)
    this.messagearearef=React.createRef()
  }
  componentDidMount=()=>{
    // this.messagearearef.current.scrollHeight
    console.log("ref",this.messagearearef.current)
    this.messagearearef.current.scrollTop=this.messagearearef.current.scrollHeight
  }

  render() {

    return (
      <>
        <div className="row">
          <div className="col-sm-12">
            <div className="headname">Arnold</div>
          </div>
        </div>
        <div class="row messagearea" ref={this.messagearearef}>
          <div className="col-sm-12 messagequeue">
            {
            
            this.props.messages.map((message)=>{
              return (<div class="row message" s>
                <div className="col-sm-12">
                  <div className="messagetext" style={{float:message.pos,textAlign:message.pos}}>
                {message.text}</div>
                </div>

              </div>)
            })

            }
          </div>
        </div>

        <div className="row sendarea">
          <div className="col-sm-12">
            <div class="input-group mb-3">
              <input
                type="text"
                class="form-control"
                placeholder="Start Typing....."
                aria-label="Start Typing....."
                aria-describedby="button-addon2"
              />
              <button class="btn  btn-success" type="button" id="button-addon2">
                {">"}
              </button>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default ChatArea;
