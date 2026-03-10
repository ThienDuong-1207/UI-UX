import React from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';

const ContactArea = () => {
  return (
    <section id="contact" className="py-5 bg-white">
      <Container>
        <h2 className="text-center mb-5 fw-bold" style={{ color: '#0D6EFD' }}>Liên hệ với chúng tôi</h2>
        <Row className="g-4">
          <Col md={6}>
            <div className="p-4 border rounded-3 shadow-sm h-100">
              <h4 className="mb-4">Gửi tin nhắn</h4>
              <Form>
                <Form.Group className="mb-3">
                  <Form.Label>Họ và tên</Form.Label>
                  <Form.Control type="text" placeholder="Nhập họ tên của bạn" required />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label>Số điện thoại</Form.Label>
                  <Form.Control type="tel" placeholder="Nhập số điện thoại" required />
                </Form.Group>
                <Form.Group className="mb-4">
                  <Form.Label>Lời nhắn</Form.Label>
                  <Form.Control as="textarea" rows={4} placeholder="Nội dung cần hỗ trợ..." />
                </Form.Group>
                <Button variant="primary" type="submit" className="w-100 fw-semibold" style={{ backgroundColor: '#0D6EFD' }}>
                  Gửi liên hệ
                </Button>
              </Form>
            </div>
          </Col>
          <Col md={6}>
            <div className="h-100 rounded-3 overflow-hidden shadow-sm border">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15677.126488737525!2d106.6952481!3d10.7891398!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752f4a382f6e9b%3A0xe9f018e6922b9f99!2zUXXhuq1uIDEsIFRow6BuaCBwaOG7kSBI4buTIENow60gTWluaCwgVmnhu4d0IE5hbQ!5e0!3m2!1svi!2s!4v1680123456789!5m2!1svi!2s" 
                width="100%" 
                height="100%" 
                style={{ border: 0, minHeight: '400px' }} 
                allowFullScreen="" 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="Google Maps"
              ></iframe>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default ContactArea;
