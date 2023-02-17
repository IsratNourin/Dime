import { Col, Form, Row, Container, Button } from "react-bootstrap";
import { RxCross1 } from "react-icons/rx";

import "./invoiceForm.css";

const InvoiceForm = () => {
  return (
    <>
      <Container>
        <div className="invoiceForm">
          <Form>
            <Row>
              <Col>Name</Col>
              <Col xs={5}>Description</Col>
              <Col xs={1}>Qty</Col>
              <Col xs={2}>Unit Price</Col>

              <Col>Item Price</Col>
            </Row>

            <Row>
              <Col>
                <Form.Control placeholder="Name" />
              </Col>
              <Col xs={5}>
                <Form.Control placeholder="Description" />
              </Col>
              <Col xs={1}>
                <Form.Control placeholder="Qty" />
              </Col>
              <Col xs={2}>
                <Form.Control placeholder="Unit Price" />
              </Col>

              <Col>
                <p className="subTotal">$0.00</p>
                <Button variant="dark" className="action">
                  <RxCross1 />
                </Button>
              </Col>
            </Row>
          </Form>
        </div>
        <div className="invoiceFooter">
          <Row>
            <Col xs={2}>
              <Button variant="primary">Add Item</Button>
            </Col>
            <Col xs={{ offset: 6 }}>
              <p>Subtotal</p>
              <p>Tax</p>

              <Form.Control type="number" placeholder="0.00%" step={0.01} />
              <p>Discount</p>
              <Form.Control type="number" placeholder="0.00%" step={0.01} />
              <p>Amount Due</p>
            </Col>
            <Col>
              <p>$0.00</p>
              <p>-</p>
              <p>-</p>
              <p>$0.00</p>
            </Col>
          </Row>

          <hr />
        </div>

        <div className="commentBox">
          <p>Add a note, (optional displayed an invoice)</p>
          <Form.Control type="textarea" />

          <Button variant="primary">Add Attachment</Button>
        </div>
      </Container>
    </>
  );
};

export default InvoiceForm;
