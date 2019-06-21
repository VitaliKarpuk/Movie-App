import React from 'react'
import { BtnRequest } from '../state-manager/action/BtnRequest'
export class Form extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
          value: '',

        }
      }
    handleChange = event => {
      event.preventDefault();
        this.setState({
          value: event.target.value
          })
    }
  
render(){
    return(
        <>
            <form onSubmit =  {this.handleChange} >
                  <h2>Find your movie :  </h2>
                  <input className='input' type="text" value={this.state.value} 
                  onChange={this.handleChange} />
                  <BtnRequest state={this.state.value} handleChange = {this.handleChange}/>
            </form>
            
            

        </>
    )
}  
}


