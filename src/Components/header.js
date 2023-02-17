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
          <Row>
            <Col className="title">
              <h1>Invoice</h1>
              <p>#</p>
            </Col>
            <Col className="link">
              <p>This looks your first experience!</p>
              <a href="#">View Walkthrough</a>
            </Col>
            <Col>
              <Button variant="primary" className="addCompanyBtn dimeBtn right">Add Company Info</Button>
            </Col>

          </Row>
          <Row>
            <Col>
              <hr /></Col>
          </Row>

        </Container>
      </header>


      <div className="summary">

        <Container>
          <Row>
            <Col>
              <Row>
                <Col className="billing">
                  <p>Bill To</p>
                  <Button variant="primary" className="dimeBtn">Add Client</Button>
                </Col>
                <Col className="issueDate">
                  <p>Issue Date</p>
                  <i>Not set</i>
                </Col>
              </Row>
            </Col>

            <Col>
              <Row>
                <Col className="dueDate">
                  <p>Due Date</p>
                  <i>Not set</i>
                </Col>
                <Col className="invoiceTotal">
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
