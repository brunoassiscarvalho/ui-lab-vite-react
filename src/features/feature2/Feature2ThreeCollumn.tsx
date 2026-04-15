import Column from "../../components/atoms/Collumn/Column";
import Paper from "../../components/atoms/Papper/Paper";
import Row from "../../components/atoms/Row/Row";
import "./theme.css";

export default function Feature2ThreeColumnPage() {
  return (
    <div>
      <Column>
        <Row>
          <Paper>
            <h2>Row 1</h2>
            <p>Content for column 1.</p>
          </Paper>
          <Paper>
            <h2>Row 1</h2>
            <p>Content for column 2.</p>
          </Paper>
          <Paper>
            <h2>Row 1</h2>
            <p>Content for column 3.</p>
          </Paper>
        </Row>
        <Row>
          <Paper>
            <h2>Row 2</h2>
            <p>Content for column 1.</p>
          </Paper>
          <Paper>
            <h2>Row 2</h2>
            <p>Content for column 2.</p>
          </Paper>
          <Paper>
            <h2>Row 2</h2>
            <p>Content for column 3.</p>
          </Paper>
        </Row>
        <Row>
          <Paper>
            <h2>Row 3</h2>
            <p>Content for column 1.</p>
          </Paper>
          <Paper>
            <h2>Row 3</h2>
            <p>Content for column 2.</p>
          </Paper>
          <Paper>
            <h2>Row 3</h2>
            <p>Content for column 3.</p>
          </Paper>
        </Row>
      </Column>
    </div>
  );
}
