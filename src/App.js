import React from "react";
import TempInput from"./TempInput"
import * as tryConv from "./TryConvert"
class App extends React.Component{
    constructor(props){
        super(props);
        this.state={
            scale:'c',
            temp:''
        };
    }
    handleChangeFar=(temp)=>{
        this.setState({
            scale:'f',
            temp:temp
        })
        
    }
    
    handleChangeCel=(temp)=>{
        this.setState({
            scale:'c',
            temp:temp
        })
    }
    render(){
        const cel=this.state.scale =='f' ? tryConv.tryConvert(this.state.temp,tryConv.toCelsius) : this.state.temp
        const far=this.state.scale =='c' ? tryConv.tryConvert(this.state.temp,tryConv.toFahrenheit) : this.state.temp
        
        return(
            <React.Fragment>
                <TempInput tempreture={cel} type="c"onTempratureChange={this.handleChangeCel}/>
                <TempInput tempreture={far} type="f"onTempratureChange={this.handleChangeFar}/>
            </React.Fragment>
        );
    }
}
export default App