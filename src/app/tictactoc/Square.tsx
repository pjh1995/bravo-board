import React from "react";

export type SquareProps = { onClick: () => void; value: "X" | "O" };

const Square = (props: SquareProps) => {
  return (
    <button
      className="square"
      onClick={() => props.onClick()}
      style={{ width: "100px", height: "100px" }}
    >
      {props.value}
    </button>
  );
};

export default Square;
