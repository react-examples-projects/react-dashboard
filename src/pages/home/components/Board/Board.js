import css from "./Board.module.scss";
import Button from "react-bootstrap/Button";
import { BiAddToQueue } from "react-icons/bi";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import tasks from "../../../../mocks/tasks.js";
import cs from "classnames";
import Task from "./Task";

export default function Board({ title = "Untitle", countTasks = 0 }) {
  return (
    <div className={cs("shadow-sm", css.board)}>
      <div className="d-flex justify-content-lg-between align-items-center">
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
      <DragDropContext>
        <Droppable droppableId="tasks">
          {(provided) => {
            return (
              <div {...provided.droppableProps} ref={provided.innerRef}>
                {tasks.map((task, index) => {
                  return (
                    <Draggable
                      key={task.id}
                      draggableId={task.id.toString()}
                      index={task.id}
                    >
                      {(provided) => (
                        <Task
                          {...task}
                          {...provided.draggableProps}
                          {...provided.dragHandleProps}
                          ref={provided.innerRef}
                        />
                      )}
                    </Draggable>
                  );
                })}
              </div>
            );
          }}
        </Droppable>
      </DragDropContext>
    </div>
  );
}
