import React from 'react';
import RegularGame from './regular-game.js';
import TraingGame from './training-game.js';
import  {reti} from '../games/reti-gambit.js';
import {tennison} from '../games/tennison-gambit.js';
import {unknown} from '../games/unknown-gambit.js';

export default class Game extends React.Component {
  constructor(){
    super();
    this.state = {
      mode: '',
      gambit: ''
    }
  }

  assignState = (key, value) => {
    this.setState(cur => {
      return {
        ...cur,
        [key]: value
      }
    })
  }

  getGambitMoves = (name) => {
    if (name==='reti') {
      return reti;
    } else if (name==='tennison') {
      return tennison;
    }
    return unknown;
  }

  renderGame() {
    if (this.state.mode === 'regular') {
      return <RegularGame />
    }
    if (this.state.mode === 'training' && this.state.gambit === '') {
      return (
        <div>
          <button onClick={() => {this.assignState('gambit', 'reti')}}>reti</button>
          <button onClick={() => {this.assignState('gambit', 'tennison')}}>tennison</button>
          <button onClick={() => {this.assignState('gambit', 'unknown')}}>unknown</button>
        </div>
      )
    } else if (this.state.mode === 'training' && this.state.gambit !== '') {
      return <TraingGame moves={this.getGambitMoves(this.state.gambit)} />
    }
    return (
      <div>
        <button onClick={() => {this.assignState('mode', 'regular')}}>regular</button>
        <button onClick={() => {this.assignState('mode', 'training')}}>training</button>
      </div>
      );
  }

  render() {
    return this.renderGame();
  }
}