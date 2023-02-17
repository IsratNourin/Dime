import { Col, Form, Row, Container, Button } from "react-bootstrap";
import { RxCross1 } from "react-icons/rx";

import "./invoiceForm.css";

const InvoiceForm = () => {
  return (
    <>
      <Container>
        <div className="invoiceForm">
          <Form>
            <Row className="listHeader">
              <Col><p>Name</p></Col>
              <Col xs={6}><p>Description</p></Col>
              <Col xs={1}><p className="right-align">Qty</p></Col>
              <Col xs={2}><p className="right-align">Unit Price</p></Col>

              <Col>Item Price</Col>
            </Row>

            <Row className="listItem">
              <Col>
                <Form.Control placeholder="Name" />
              </Col>
              <Col xs={6}>
                <Form.Control placeholder="Description" />
              </Col>
              <Col xs={1}>
                <Form.Control placeholder="Qty" className="right-align" />
              </Col>
              <Col xs={2}>
                <Form.Control placeholder="Unit Price" className="right-align" />
              </Col>

              <Col>
                <p className="subTotal">$0.00</p>
                <Button variant="light" className="action">
                  <RxCross1 />
                </Button>
              </Col>
            </Row>
          </Form>
        </div>
        <div className="invoiceFooter">
          <Row>
            <Col xs={2}>
              <Button variant="primary addItemBtn">Add Item</Button>
            </Col>
            <Col xs={{ offset: 6, span: 2 }}>
              <p className="subTotalVal">Subtotal</p>
              <Row>
                <Col xs={5} className="right-align">
                  <Form.Label className="additionalCharge">Tax</Form.Label>
                </Col>
                <Col>
                  <Form.Control type="number" placeholder="0.00%" step={0.01} />
                </Col>

              </Row>
              <Row>

                <Col xs={5} className="right-align">
                  <Form.Label className="additionalCharge">Discount</Form.Label>
                </Col>
                <Col>
                  <Form.Control type="number" placeholder="0.00%" step={0.01} />
                  <p className="totalAmount" style={{fontSize: 12}}>Amount Due</p>

                </Col>
              </Row>

            </Col>
            <Col className="right-align">
              <p>$0.00</p>
              <p className="additionalChargeVal">-</p>
              <p className="additionalChargeVal">-</p>
              <p className="totalAmount">$0.00</p>
            </Col>
            <Col xs={1}></Col>
          </Row>

          <hr />
        </div>

        <div className="commentBox">
          <p>Add a note, (optional displayed an invoice)</p>
          <Form.Control type="textarea" />

          <div className="attachmentBtn">
          <Button variant="primary">Add Attachment</Button>

          </div>

        </div>
      </Container>
    </>
  );
};

export default InvoiceForm;
