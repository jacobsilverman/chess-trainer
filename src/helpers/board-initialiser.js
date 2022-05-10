import Bishop from '../pieces/bishop.js';
import King from '../pieces/king.js';
import Knight from '../pieces/knight.js';
import Pawn from '../pieces/pawn.js';
import Queen from '../pieces/queen.js';
import Rook from '../pieces/rook.js';

export default function initialiseChessBoard(player){
  const squares = Array(64).fill(null);

  const playerOne = (player === 'white') ? 1 : 2;
  const playerTwo = (player === 'white') ? 2 : 1;

  for(let i = 8; i < 16; i++){
    squares[i] = new Pawn(playerTwo);
    squares[i+40] = new Pawn(playerOne);
  }
  squares[0] = new Rook(playerTwo);
  squares[7] = new Rook(playerTwo);
  squares[56] = new Rook(playerOne);
  squares[63] = new Rook(playerOne);

  squares[1] = new Knight(playerTwo);
  squares[6] = new Knight(playerTwo);
  squares[57] = new Knight(playerOne);
  squares[62] = new Knight(playerOne);

  squares[2] = new Bishop(playerTwo);
  squares[5] = new Bishop(playerTwo);
  squares[58] = new Bishop(playerOne);
  squares[61] = new Bishop(playerOne);

  squares[3] = new Queen(playerTwo);
  squares[4] = new King(playerTwo);

  squares[59] = new Queen(playerOne);
  squares[60] = new King(playerOne);

  return squares;
}