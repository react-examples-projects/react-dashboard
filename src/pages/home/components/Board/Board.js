import css from "./Board.module.scss";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { BiAddToQueue } from "react-icons/bi";
import PropTypes from "prop-types";
import cs from "classnames";
import Task from "../Task/Task";
import { useState } from "react";
function Board({
  title = "Untitle",
  countTasks = 0,
  tasks = [],
  id,
  addTasksInBoard,
}) {
  const [isVisibleForm, setVisibleForm] = useState(false);
  const toggleVisibleForm = () => setVisibleForm(!isVisibleForm);

  const onDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();
    e.target.style.border = "0";

    const cardId = e.dataTransfer.getData("card_id");
    const boardId = e.dataTransfer.getData("board_id");
    const card = document.getElementById(cardId);

    if (card.parentNode.isSameNode(e.target)) return;
    document.getElementById(id).appendChild(card);
    return false;
  };

  const onDragOver = (e) => {
    e.stopPropagation();
    e.preventDefault();
    return false;
  };

  const onDragEnter = (e) => {
    console.log(e.target);
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

  const onSubmit = (e) => {
    e.preventDefault();
    const title = e.target.title.value;
    const content = e.target.content.value;
    addTasksInBoard(id, { title, content });
    e.target.reset();
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

      <div id={id} className="my-3">
        {tasks.map((task, index) => {
          return <Task {...task} key={task.id} boardId={id} />;
        })}
      </div>

      {isVisibleForm && (
        <Form onSubmit={onSubmit}>
          <Form.Group controlId="title">
            <Form.Control
              type="text"
              name="title"
              placeholder="Title card"
              size="sm"
              required
            />
          </Form.Group>

          <Form.Group controlId="content">
            <Form.Control
              as="textarea"
              name="content"
              placeholder="Title card"
              size="sm"
              required
            />
          </Form.Group>

          <Button type="submit" variant="success" size="sm" block>
            Add
          </Button>
        </Form>
      )}

      <Button
        size="sm"
        className={cs("mt-2 mb-3", css.btnAdd)}
        onClick={toggleVisibleForm}
        block
      >
        <BiAddToQueue className={css.buttonAddIcon} />
      </Button>
    </div>
  );
}

Board.propTypes = {
  title: PropTypes.string,
  countTasks: PropTypes.number,
  tasks: PropTypes.array,
};

export default Board;
