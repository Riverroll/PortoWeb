import { Col, Row } from "react-bootstrap";

export const WhatsAppContact = () => {
  const whatsappNumber = "+6281315764554";
  const whatsappLink = `https://wa.me/${whatsappNumber}`;

  return (
    <Col lg={12}>
      <div className="whatsapp-contact-bx wow slideInUp">
        <Row>
          <Col lg={12} md={6} xl={5}>
            <h3>Contact me on WhatsApp<br></br>for the latest updates and inquiries</h3>
          </Col>
          <Col md={6} xl={7}>
            <div className="whatsapp-btn-bx">
              <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="whatsapp-btn">
                Contact on WhatsApp
              </a>
            </div>
          </Col>
        </Row>
      </div>
    </Col>
  )
}