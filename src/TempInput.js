import React from 'react';

const scales = {
    c:"Celsius",
    f:"Fahrenheit"
}
class TempInput extends React.Component{
    
    handleChange=(event)=>{
        this.props.onTempratureChange(event.target.value)
    }

    render(){
        return(
        <div>
            <label>{scales[this.props.type]}</label>
            <br/>
            <input 
            type='text'
            value={this.props.tempreture}
            onChange={this.handleChange}/>
            <br/>
            <br/>
        </div>
        )
    }
}
export default TempInput