import React, { useState } from "react";
import { Col, Row, Alert } from "react-bootstrap";

export const Newletters = ({ onValidated, status, message }) => {
  const [email, setEmail] = useState("");
  const [alertVisible, setAlertVisible] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email) {
      localStorage.setItem("subscriberEmail", email);
      setAlertVisible(true);
      clearFields();
      setTimeout(() => setAlertVisible(false), 3000);
    }
  };

  const clearFields = () => {
    setEmail("");
  };

  return (
    <Col lg={12} className="">
      <div className="newsletter-bx">
        <Row className="d-flex flex-column flex-md-row">
          <Col md={5} xl={5} className="text-center text-md-start">
            <h3>Subscribe to our Newsletter & Never miss latest updates</h3>
          </Col>
          <Col md={7} xl={7} className="mt-4 mt-md-0">
            <form onSubmit={handleSubmit}>
              <div className="new-email-bx">
                <input
                  value={email}
                  type="email"
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                />
                <button type="submit">Submit</button>
              </div>
            </form>
          </Col>
        </Row>
        {alertVisible && (
          <Alert variant="success" className="mt-3">
            Email successfully registered!
          </Alert>
        )}
      </div>
    </Col>
  );
};
