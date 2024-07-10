import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import ServiceCard from "./services";
import "./card.css";
import { Modal } from "react-bootstrap";

const CardPage = () => {
  const [show, setShow] = useState(false);
  const [selectedService, setSelectedService] = useState(null);

  const handleClose = () => setShow(false);
  const handleShow = (service) => {
    setSelectedService(service);
    setShow(true);
  };
  const serviceList = ServiceCard();
  return (
    <div className="container">
      {serviceList.map((service) => (
        <div key={service.id} className="cards">
          <Card style={{ width: "12rem" }}>
            <Card.Img variant="top" src={service.image} alt={service.title} />
            <Card.Body>
              <Card.Title>{service.title}</Card.Title>
              <Card.Text>{service.description}</Card.Text>
              <Button variant="primary" onClick={() => handleShow(service)}>
                En savoir plus
              </Button>
            </Card.Body>
          </Card>
          <br />
        </div>
      ))}

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{selectedService?.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {selectedService?.link ? (
            <iframe
              src={selectedService.link}
              title={selectedService.title}
              style={{ width: "100%", height: "600px", border: "none" }}
            ></iframe>
          ) : (
            <p>No link available</p>
          )}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Fermer
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default CardPage;
