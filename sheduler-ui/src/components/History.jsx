import { Component } from 'react'
class History extends Component{
    render(){
        return(

            <div class="historybox" onClick={()=>{
                console.log('clicked')
            }}>
                
               <div>^ Updated event Reduce Market Risks </div>
               <div>Today 3:30pm</div>
            </div>

        )
    }
}
export default History