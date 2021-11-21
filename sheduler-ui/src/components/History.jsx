import { Component } from 'react'
class History extends Component{
    render(){
        return(

            <div class="historybox" onClick={()=>{
                console.log('clicked')
            }}>
                
               <div>^ Updated event webmature </div>
               <div>12th jan 2021 3:30pm</div>
            </div>

        )
    }
}
export default History