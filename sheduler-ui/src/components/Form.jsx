import { Component } from "react";
class Form extends Component {
    state={
        name:"",
        from:"",
        to:"",
        notes:"",
        meetlink:""
    }

    handleChange=(data,param)=>{
console.log("data",param,data)
if(param==="name"){
this.setState({name:data})}
if(param==="from"){
    this.setState({from:data})}
    if(param==="to"){
        this.setState({to:data})}
        if(param==="meetlink"){
            this.setState({meetlink:data})}
            if(param==="notes"){
                this.setState({notes:data})}

    }
  render() {
    return (
      <div class="form">
        <div class="row">
          <input
            type="text"
            class="forminput"
            value={this.state.name}
            placeholder="Name of the Event"
            onChange={(e)=>this.handleChange(e.target.value,"name")}
          />
        </div>

        <div class="row">
          <input
            type="datetime-local"
            class="forminput"
            value={this.state.from}
            placeholder="start datetime"
            onChange={(e)=>this.handleChange(e.target.value,"from")}
          />
        </div>
        <div class="row">
          <div class="to">to</div>
        </div>
        <div class="row">
          <input type="datetime-local" class="forminput"  value={this.state.to} 
          onChange={(e)=>this.handleChange(e.target.value,"to")}/>
        </div>

        <div class="row">
          <input
            type="text"
            class="forminput"
            value={this.state.meetlink}
            placeholder="Meet link"
            onChange={(e)=>this.handleChange(e.target.value,"meetlink")}
          />
        </div>
        <div class="row">
          <textarea class="forminput textarea" placeholder="Notes Area" 
           value={this.state.notes}
          onChange={(e)=>this.handleChange(e.target.value,"notes")}/>
        </div>
        <div class="row">
          <button class="formbutton">add</button>
        </div>
      </div>
    );
  }
}

export default Form;
