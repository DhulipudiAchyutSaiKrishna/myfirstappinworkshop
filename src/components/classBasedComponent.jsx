import React from 'react';

class ClassBasedComponent extends React.Component{

    constructor(props){
        super(props);
        this.state = {count : 0}
    }

     inc = ()=>{
        this.setState({count : this.state.count+1});
    }

    dec = ()=>{
        // if(this.state.count > 0){}
        this.setState({count : this.state.count - 1});
    }

    clr = ()=>{
        this.setState({count : 0});
        if(this.state.count == 0){
            alert("Already cleared");
        }
    }

        render(){

            return(
                <>
                <h1>This is {this.props.name}</h1>
                <button onClick={()=>{this.inc()}}>Inc</button> <br/> <br/>
                <button onClick={()=>{this.dec()}}>Dec</button> <br/> <br/>
                <button onClick={()=>{this.clr()}}>Clr</button>
            <h1>Count is {this.state.count}</h1>
            </>
            );

        }

    }

export default ClassBasedComponent;
