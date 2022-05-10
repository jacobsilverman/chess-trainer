import React from 'react';
import RegularGame from './regular-game.js';
import TraingGame from './training-game.js';

export default class Game extends React.Component {
  constructor(){
    super();
    this.state = {
      mode: '',
      player: ''
    }
  }

  renderGame() {
    if (this.state.mode === 'regular') {
      return <RegularGame />
    }
    if (this.state.mode === 'training' && this.state.player) {
      return <TraingGame player={this.state.player} />
    }
    return (
      <div>
        <button onClick={() => {this.setState({mode:'regular'})}}>regular</button>
        <button onClick={() => {this.setState({mode:'training'})}}>training</button>
        <button onClick={() => {this.setState({player:'white'})}}>white</button>
        <button onClick={() => {this.setState({player:'black'})}}>black</button>
      </div>
      );
  }


  render() {
    return this.renderGame();
  }
}