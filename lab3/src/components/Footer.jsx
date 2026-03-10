import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaFacebook, FaInstagram } from 'react-icons/fa';
import { SiZalo } from 'react-icons/si';

const Footer = () => {
  return (
    <footer className="text-white py-4" style={{ backgroundColor: '#052C65' }}>
      <Container>
        <Row className="gy-4">
          <Col md={4} className="text-center text-md-start">
            <h3 className="fw-bold mb-3 text-primary" style={{ color: '#0D6EFD' }}>OHANA</h3>
            <p className="small text-white-50">
              Cung cấp giải pháp tìm kiếm phòng trọ, căn hộ, không gian sống lý tưởng và tiện nghi cho mọi người.
            </p>
          </Col>
          <Col md={4} className="text-center">
            <h5 className="fw-semibold mb-3">Kết nối với chúng tôi</h5>
            <div className="d-flex justify-content-center gap-3">
              <a href="#" className="text-white fs-4 hover-opacity"><FaFacebook /></a>
              <a href="#" className="text-white fs-4 hover-opacity"><FaInstagram /></a>
              <a href="#" className="text-white fs-4 hover-opacity"><SiZalo /></a>
            </div>
          </Col>
          <Col md={4} className="text-center text-md-end">
            <h5 className="fw-semibold mb-3">Thông tin liên hệ</h5>
            <p className="small text-white-50 mb-1">Hotline: 1900 1234</p>
            <p className="small text-white-50">Email: support@ohana.com</p>
            <p className="small text-white-50 mt-3">&copy; 2026 Ohana. All rights reserved.</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
