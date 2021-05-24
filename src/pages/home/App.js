import Layout from "../../components/Layout/Layout";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Board from "./components/Board/Board";
import tasks_list from "../../mocks/tasks";
import { useState } from "react";

export default function App() {
  const [tasks, setTasks] = useState(tasks_list);
  const addTasksInBoard = (board, task) => {
    const copy = { ...tasks };
    const board_array = copy[board];
    task.id = board_array[board_array.length - 1].id + 1;
    board_array.push(task);
    setTasks(copy);
  };

  return (
    <Layout>
      <h4 className="font-weight-bold mb-4">Overview</h4>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Expedita
        similique provident molestias consequuntur error voluptas eos explicabo,
        autem ut a iusto soluta quod officia laboriosam.
      </p>

      <Row>
        <Col className="p-2" sm={12} md={4} lg={4}>
          <Board
            title="Todo"
            countTasks={tasks.todo.length}
            tasks={tasks.todo}
            id="todo"
            addTasksInBoard={addTasksInBoard}
          />
        </Col>
        <Col className="p-2" sm={12} md={4} lg={4}>
          <Board
            title="In Progress"
            countTasks={tasks["in-progress"].length}
            tasks={tasks["in-progress"]}
            id="in-progress"
            addTasksInBoard={addTasksInBoard}
          />
        </Col>
        <Col className="p-2" sm={12} md={4} lg={4}>
          <Board
            title="Completed"
            countTasks={tasks.completed.length}
            tasks={tasks.completed}
            id="completed"
            addTasksInBoard={addTasksInBoard}
          />
        </Col>
      </Row>
    </Layout>
  );
}
