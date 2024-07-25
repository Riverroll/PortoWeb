import { Col } from "react-bootstrap";

export const CertificateCard = ({ title, description, imgUrl }) => {
  return (
    <Col xs={12} sm={6} md={4} className="mb-4">
      <div className="proj-imgbx" style={{ height: '300px', overflow: 'hidden' }}>
        <img src={imgUrl} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
        <div className="proj-txtx">
          <h4>{title}</h4>
          <span>{description}</span>
        </div>
      </div>
    </Col>
  )
}