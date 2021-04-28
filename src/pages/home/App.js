import Layout from "../../components/Layout/Layout";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Board from "./components/Board/Board";
import { DragDropContext } from "react-beautiful-dnd";
import tasks_list from "../../mocks/tasks";
import { useState } from "react";
import reorder from "../../helpers/reorder";

export default function App() {
  const [tasks, setTasks] = useState(
    JSON.parse(localStorage.getItem("tasks")) || tasks_list
  );

  const onDragEnd = (result) => {
    const stateTasks = { ...tasks };

    if (!result.destination) return;
    console.log(result);
    console.log(tasks_list[result.source.droppableId]);
    const tasksOrdened = reorder(
      tasks_list[result.source.droppableId],
      result.source.index,
      result.destination.index
    );
    stateTasks[result.source.droppableId] = tasksOrdened;
    setTasks(stateTasks);
    localStorage.setItem("tasks", JSON.stringify(stateTasks));
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
        <DragDropContext onDragEnd={onDragEnd}>
          <Col className="p-2" sm={12} md={6} lg={4}>
            <Board title="Todo" countTasks={2} tasks={tasks.todo} />
          </Col>
          <Col className="p-2" sm={12} md={6} lg={4}>
            <Board title="In Progress" countTasks={32} tasks={tasks.progress} />
          </Col>
          <Col className="p-2" sm={12} md={6} lg={4}>
            <Board title="Completed" countTasks={7} tasks={tasks.completed} />
          </Col>
        </DragDropContext>
      </Row>
    </Layout>
  );
}
