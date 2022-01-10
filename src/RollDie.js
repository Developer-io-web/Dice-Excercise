import React, { Component } from 'react'
import Die from "./Die"
import "./RollDie.css";


class RollDie extends Component {
    constructor(props) {
        super(props);
        this.state={value1:1,value2:3,isRolling:false}

        this.randNum = this.randNum.bind(this)
    }

    randNum(){
        this.setState({isRolling:true});
        setTimeout(() => {         
            const rand1 = Math.floor(Math.random()*6+1);
            const rand2 = Math.floor(Math.random()*6+1);
            this.setState({value1:rand1,value2:rand2,isRolling:false});
        }, 800);
    }
    render(){
        return(
            <div className="flex">
                <h1 className="text-center">Dice Roll Game</h1>
                <div className="container">
                    <Die value={this.state.value1} isRolling={this.state.isRolling} />
                    <Die value={this.state.value2} isRolling={this.state.isRolling} />
                </div>
                <div className="container">
                    <button className="btn" onClick={this.randNum} disabled={this.state.isRolling}>
                        {this.state.isRolling? "Rolling.." : "Roll Dice!"}</button>
                </div>
            </div>
        )
    }
}

export default RollDie