"use client";

import { useMemo, useState } from "react";
import Board, { BoardProps } from "./Board";

const Game = () => {
  const [history, setHistory] = useState([
    {
      squares: Array(9).fill(null),
    },
  ]);
  const [step, setStep] = useState(0);
  const [xIsNext, setXIsNext] = useState(false);

  const current = history[step];
  const winner = calculateWinner(current.squares);

  function handleClick(i: number) {
    const _history = [...history].slice(0, step + 1);
    const current = _history[_history.length - 1];
    const squares = current.squares.slice();
    if (calculateWinner(squares) || squares[i]) {
      return;
    }
    squares[i] = xIsNext ? "X" : "O";
    setHistory(
      _history.concat([
        {
          squares: squares,
        },
      ])
    );
    setStep(_history.length);
    setXIsNext(!xIsNext);
  }

  function jumpTo(_step: number) {
    setStep(_step);
    setXIsNext(_step % 2 === 0);
  }

  const moves = history.map((_, move) => {
    const desc = move ? "Go to move #" + move : "Go to game start";
    return (
      <li key={move}>
        <button onClick={() => jumpTo(move)}>{desc}</button>
      </li>
    );
  });

  console.log({ winner });
  return (
    <div className="game">
      <div className="game-board">
        <Board squares={current.squares} onClick={handleClick} />
      </div>
      <div className="game-info">
        <div>
          {winner
            ? "Winner: " + winner
            : "Next player: " + (xIsNext ? "X" : "O")}
        </div>
        <ol>{moves}</ol>
      </div>
    </div>
  );
};

export default Game;

function calculateWinner(squares: BoardProps["squares"]) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  return lines.some((line) => {
    const [a, b, c] = line;
    console.log({ line, squares, a, b, c });
    console.log({
      a: squares[a],
      b: squares[a] === squares[b],
      c: squares[a] === squares[c],
    });
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      console.log("??");
      return true;
    }
  });
}
