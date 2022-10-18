import React from 'react';
import RegularGame from './regular-game.js';
import TraingGame from './training-game.js';

export default class Game extends React.Component {
  constructor(){
    super();
    this.state = {
      mode: ''
    }
  }

  renderGame() {
    if (this.state.mode === 'regular') {
      return <RegularGame />
    }
    if (this.state.mode === 'training') {
      return <TraingGame />
    }
    return (
      <div>
        <button onClick={() => {this.setState({mode:'regular'})}}>regular</button>
        <button onClick={() => {this.setState({mode:'training'})}}>training</button>
      </div>
      );
  }


  render() {
    return this.renderGame();
  }
}