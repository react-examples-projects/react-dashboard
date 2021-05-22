import Layout from "../../components/Layout/Layout";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Board from "./components/Board/Board";
import tasks_list from "../../mocks/tasks";
import { useState } from "react";

export default function App() {
  const [tasks, setTasks] = useState(tasks_list);

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
          <Board title="Todo" countTasks={2} tasks={tasks.todo} id="todo" />
        </Col>
        <Col className="p-2" sm={12} md={4} lg={4}>
          <Board
            title="In Progress"
            countTasks={32}
            tasks={tasks.progress}
            id="in-progress"
          />
        </Col>
        <Col className="p-2" sm={12} md={4} lg={4}>
          <Board
            title="Completed"
            countTasks={7}
            tasks={tasks.completed}
            id="completed"
          />
        </Col>
      </Row>
    </Layout>
  );
}
