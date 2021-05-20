import css from "./Board.module.scss";
import Button from "react-bootstrap/Button";
import { BiAddToQueue } from "react-icons/bi";
import { Droppable, Draggable } from "react-beautiful-dnd";
import PropTypes from "prop-types";
import cs from "classnames";
import Task from "../Task/Task";

function Board({ title = "Untitle", countTasks = 0, tasks = [] }) {
  const id = title.toLowerCase().trim().replace(/ /gi, "-");
  return (
    <div className={cs("shadow-sm", css.board)}>
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

      <Droppable droppableId={id}>
        {(provided) => {
          return (
            <div {...provided.droppableProps} ref={provided.innerRef}>
              {tasks.map((task, index) => {
                return (
                  <Draggable
                    key={task.id.toString()}
                    draggableId={task.id.toString()}
                    index={index}
                  >
                    {(_provided) => (
                      <Task
                        {...task}
                        {..._provided.draggableProps}
                        {..._provided.dragHandleProps}
                        ref={_provided.innerRef}
                      />
                    )}
                  </Draggable>
                );
              })}
              {/* es necesario para que el contenedor se adapte al tamaño de los
               elementos que se arrastran en su interior */}
              {provided.placeholder}
            </div>
          );
        }}
      </Droppable>
    </div>
  );
}

Board.propTypes = {
  title: PropTypes.string,
  countTasks: PropTypes.number,
  tasks: PropTypes.array,
};

export default Board;
