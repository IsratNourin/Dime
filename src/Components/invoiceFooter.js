import { Col, Form, Row, Container, Button } from "react-bootstrap";

import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";
import "./invoiceFooter.css";


const InvoiceFooter = () => {
    return <>

        <Container>
            <Row className="invoiceField">
                <Col xs={3}>
                    <Row>
                        <Col xs={5}><Form.Label>Invoice ID</Form.Label></Col>
                        <Col><Form.Control /></Col>
                    </Row>
                </Col>
                <Col xs={3}>
                    <Row>
                        <Col xs={5}><Form.Label>Issue Date</Form.Label></Col>
                        <Col><Form.Control /></Col>
                    </Row>
                </Col>

                <Col xs={3}>
                    <Row>
                        <Col xs={5}><Form.Label>Due Date</Form.Label></Col>
                        <Col><Form.Control /></Col>
                    </Row>
                </Col>

                <Col>
                    <Row>
                        <Col xs={{offset: 2}}><Button variant="light">Cancel</Button></Col>
                        <Col><Button variant="primary" className="saveBtn">Save</Button></Col>
                    </Row>
                </Col>
            </Row>
        </Container>

    </>
}

export default InvoiceFooter;