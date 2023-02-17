import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import "./header.css";

const Header = () => {
  return (
    <>
      <header>
        <Container>
          <Row >
            <Col>
              <h1>Invoice</h1>
              <p>#</p>
            </Col>
            <Col className="link">
              <p>This looks your first experience!</p>
              <a href="#">View Walkthrough</a>
            </Col>
            <Col>
              <Button variant="primary">Add Company Info</Button>
            </Col>
          </Row>
          <Row>
            <hr />
          </Row>
        </Container>
      </header>
      <div className="summary">
        <Container>
          <Row>
            <Col>
              <Row>
                <Col>
                  <p>Bill To</p>
                  <Button variant="primary">Add Client</Button>
                </Col>
                <Col>
                  <p>Issue Date</p>
                  <p>Not set</p>
                </Col>
              </Row>
            </Col>

            <Col>
              <Row>
                <Col>
                  <p>Due Date</p>
                  <p>Not set</p>
                </Col>
                <Col>
                  <h4>Invoice Total</h4>
                  <h3>$0.00</h3>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default Header;
