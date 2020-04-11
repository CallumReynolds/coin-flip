import React, { Component } from 'react';
import Coin from './Coin';

class Coinflip extends Component {
    constructor(props){
        super(props);
        this.state = {totalFlips:0, totalHead:0, totalTails:0};
    }

    static defaultProps = {
        heads:'https://tinyurl.com/react-coin-heads-jpg',
        tails:'https://tinyurl.com/react-coin-tails-jpg'
    }

    render(){
        return(
            <div className="Coinflip">
                <h2>Let's flip a coin!</h2>
                <Coin />
            </div>
        );
 