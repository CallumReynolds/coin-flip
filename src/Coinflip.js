import React, { Component } from 'react';
import Coin from './Coin';
import './Coinflip.css';
import { choice } from './Helper';

class Coinflip extends Component {
    constructor(props){
        super(props);
        this.state = {currCoin: null, totalFlips:0, totalHead:0, totalTails:0};
        this.handeleClick = this.handeleClick.bind(this);
    }

    static defaultProps = {
        coins:[
            {side:'heads', img:'https://tinyurl.com/react-coin-heads-jpg'},
            {side:'tails', img:'https://tinyurl.com/react-coin-tails-jpg'}
        ]    
    }

    handeleClick(){
        this.flipCoin();
    }

    flipCoin(){
        const newCoin = choice(this.props.coins);
        this.setState(st => {
            return{
                currCoin: newCoin,
                totalFlips: st.totalFlips + 1,
                totalHead: st.totalHead + (newCoin.side === 'heads' ? 1 : 0),
                totalTails: st.totalTails + (newCoin.side === 'tails' ? 1 : 0)
            };
        });
    }

    render(){
        return(
            <div className="Coinflip">
                <h2>Let's flip a coin!</h2>
                {this.state.currCoin && <Coin info={this.state.currCoin}/>}
                <button className="Coinflip-button" onClick={this.handeleClick}>Flip coin!</button>
                <h5>{`Out of ${this.state.totalFlips} flips, there has been ${this.state.totalHead} heads and ${this.state.totalTails} tails.`}</h5>
            </div>
        );
    }
}

export default Coinflip;