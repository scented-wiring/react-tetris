import { StyledCell } from "./styles/StyledCell";
import { TETROMINOS } from "../terominos";

const Cell = ({ type }) => (
  <StyledCell type={type} color={TETROMINOS[type].color} />
);

export default Cell;
