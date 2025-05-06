import React, { useState } from 'react'
import Square from './Square'

function Board() {

    const [xIsNext, setXIsNext] = useState(false)
    const [square, setSquare] = useState(Array(9).fill(null))

    const onSquareClick = (i) => {
        if (square[i] || checkWinner(square)) {
            return;
        }
        const nextSquare = square.slice();
        if (xIsNext) {
            nextSquare[i] = "X"
        } else {
            nextSquare[i] = "O"
        }

        setSquare(nextSquare)
        setXIsNext(!xIsNext);
    }

    const winner = checkWinner(square);
    let status;
    if (winner) {
        status = "Winner : " + winner;
    } else {
        status = "Next player : " + (xIsNext ? "X" : "O")
    }


    return (
        <div>
            <h1>{status}</h1>
            <div className="boardRow">
                <Square value={square[0]} handleChange={() => onSquareClick(0)} />
                <Square value={square[1]} handleChange={() => onSquareClick(1)} />
                <Square value={square[2]} handleChange={() => onSquareClick(2)} />
            </div>
            <div className="boardRow">
                <Square value={square[3]} handleChange={() => onSquareClick(3)} />
                <Square value={square[4]} handleChange={() => onSquareClick(4)} />
                <Square value={square[5]} handleChange={() => onSquareClick(5)} />
            </div>
            <div className="boardRow">
                <Square value={square[6]} handleChange={() => onSquareClick(6)} />
                <Square value={square[7]} handleChange={() => onSquareClick(7)} />
                <Square value={square[8]} handleChange={() => onSquareClick(8)} />
            </div>
        </div>
    )
}

const checkWinner = (square) => {
    const lines = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [2, 4, 6],
        [0, 4, 8],
    ]

    for (let i = 0; i < lines.length; i++) {
        const [a, b, c] = lines[i];

        if (square[a] && square[a] === square[b] && square[a] === square[c]) {
            return square[a];
        }
    }
    return null;
}

export default Board
