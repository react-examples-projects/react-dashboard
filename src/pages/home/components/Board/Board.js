import css from "./Board.module.scss";
import Button from "react-bootstrap/Button";
import { BiAddToQueue } from "react-icons/bi";
import PropTypes from "prop-types";
import cs from "classnames";
import Task from "../Task/Task";
function Board({ title = "Untitle", countTasks = 0, tasks = [], id }) {

  const onDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();
    e.target.style.border = "0";

    const cardId = e.dataTransfer.getData("card_id");
    const boardId = e.dataTransfer.getData("board_id");
    const card = document.getElementById(cardId);
    if (card.parentNode.isSameNode(e.target)) return;

    console.log(e.target);
    console.log("Card id:", cardId);
    console.log("Board id:", boardId);
    document.getElementById(id).appendChild(card);
    return false;

  };

  const onDragOver = (e) => {
    e.stopPropagation();
    e.preventDefault();
    return false;

  };

  const onDragEnter = (e) => {
    console.log(e.target)
    e.stopPropagation();
    e.preventDefault();
    e.target.style.border = "1px solid #10867c54";
    return false;

  };
  const onDragLeave = (e) => {
    e.stopPropagation();
    e.preventDefault();
    e.target.style.border = "0";
    return false;

  };

  return (
    <div
      className={cs("shadow-sm", css.board)}
      onDrop={onDrop}
      onDragOver={onDragOver}
      onDragEnter={onDragEnter}
      onDragLeave={onDragLeave}
    >
      <div className="d-flex justify-content-between align-items-center">
        <h6 className="font-weight-bold m-0" style={{ fontSize: "14px" }}>
          {title}
        </h6>
        <div className={cs("p-1 px-3", css.countTasks)}>
          <strong>{countTasks}</strong>
        </div>
      </div>
      <Button size="sm" className={cs("mt-2 mb-3", css.btnAdd)} block>
        <BiAddToQueue className={css.buttonAddIcon} />
      </Button>

      <div id={id}>
        {tasks.map((task, index) => {
          return <Task {...task} key={task.id} boardId={id} />;
        })}
      </div>
    </div>
  );
}

Board.propTypes = {
  title: PropTypes.string,
  countTasks: PropTypes.number,
  tasks: PropTypes.array,
};

export default Board;
