export const makeMove = (squares, moves) => {
	squares[moves[1]] = squares[moves[0]];
    squares[moves[0]] = null;
    return squares;
}
