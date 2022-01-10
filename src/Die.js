import React, { Component } from 'react'
import "./Die.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faDiceOne,faDiceTwo,faDiceThree,faDiceFour,faDiceFive,faDiceSix } from '@fortawesome/free-solid-svg-icons'
import { library } from '@fortawesome/fontawesome-svg-core'


class Die extends Component {
    render(){
        const shake = this.props.isRolling? "shaking" : " ";
        const Num = [<FontAwesomeIcon icon={faDiceOne} className={`height ${shake}`}/>,
        <FontAwesomeIcon icon={faDiceTwo} className={`height ${shake}`}/>,
        <FontAwesomeIcon icon={faDiceThree} className={`height ${shake}`}/>,
        <FontAwesomeIcon icon={faDiceFour} className={`height ${shake}`}/>,
        <FontAwesomeIcon icon={faDiceFive} className={`height ${shake}`}/>,
        <FontAwesomeIcon icon={faDiceSix} className={`height ${shake}`}/>
        ]
        const val = (this.props.value)-1;
        return(
            <div>
               {Num[val]}
            </div>
        )
    }
}

export default Die
// <FontAwesomeIcon icon={`faDice${Num[val]}`} color="purple" size="6x"/> */}
// {/* <h1>My name is <BsFillDice1Fill/></h1> */}
// {<{chintu1}/>}
    // console.log('faDice'+Num[val]);
    // console.log(chintu);
    // const chintu1 = `BsFillDice${val}Fill`;
    // import { FaBeer } from 'react-icons/fa';
    // import { BsFillDice1Fill,BsFillDice2Fill,BsFillDice3Fill,BsFillDice4Fill,BsFillDice5Fill,BsFillDice6Fill } from "react-icons/bs";
    // import { BsFillDice1Fill } from 'react-icons/fa';
    // library.add(faDiceOne);
    // import 'font-awesome/css/font-awesome.min.css';