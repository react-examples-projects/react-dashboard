import Layout from "../../components/Layout/Layout";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Board from "./components/Board/Board";

export default function App() {
  return (
    <Layout>
      <h4 className="font-weight-bold mb-4">Overview</h4>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Expedita
        similique provident molestias consequuntur error voluptas eos explicabo,
        autem ut a iusto soluta quod officia laboriosam.
      </p>

      <Row>
        <Col className="p-2" sm={12} md={6} lg={4}>
          <Board title="Todo" countTasks={2} />
        </Col>
        <Col className="p-2" sm={12} md={6} lg={4}>
          {/* <Board title="In Progress" countTasks={32} /> */}
        </Col>
        <Col className="p-2" sm={12} md={6} lg={4}>
          {/* <Board title="Completed" countTasks={7} /> */}
        </Col>
      </Row>
    </Layout>
  );
}