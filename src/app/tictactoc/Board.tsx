import Square, { SquareProps } from './Square';
export type BoardProps = {
  squares: SquareProps['value'][];
  onClick: (idx: number) => void;
};
export function divideArray<T>(arr: T[], divide: number) {
  const _arr = [...arr];
  const result = [];

  for (let i = 0; i < arr.length / divide; i++) {
    result.push(_arr.slice(i * divide, (i + 1) * divide));
  }
  return result;
}

const Board = (props: BoardProps) => {
  const rows = divideArray(props.squares, 3);
  return (
    <div>
      {rows.map((row, i) => (
        <div className="board-row" key={`row_${i}`}>
          {row.map((cell, j) => (
            <Square key={`cell_${i}_${j}`} value={cell} onClick={() => props.onClick(i * 3 + j)} />
          ))}
        </div>
      ))}
    </div>
  );
};

export default Board;
