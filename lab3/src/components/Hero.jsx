import React, { useState } from 'react';
import { Carousel, Container, Row, Col, Form, Button } from 'react-bootstrap';
import { FaSearch } from 'react-icons/fa';

const Hero = () => {
  const [formData, setFormData] = useState({
    location: '',
    type: '',
    price: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSearch = (e) => {
    e.preventDefault();
    console.log('Search params:', formData);
  };

  const searchStyle = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    zIndex: 10,
    backgroundColor: 'rgba(255, 255, 255, 0.95)',
    padding: '20px',
    borderRadius: '10px',
    boxShadow: '0 4px 15px rgba(0,0,0,0.1)',
    width: '90%',
    maxWidth: '800px'
  };

  return (
    <div id="home" className="position-relative" style={{ marginTop: '56px' }}>
      <Carousel controls={false} indicators={false} interval={3000}>
        <Carousel.Item style={{ height: '600px' }}>
          <img
            className="d-block w-100 h-100"
            src="https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
            alt="Living Space 1"
            style={{ objectFit: 'cover' }}
          />
          <div className="carousel-caption d-none d-md-block bg-dark bg-opacity-25" style={{ borderRadius: '15px' }}>
            <h3 className="fw-bold">Không gian sống hiện đại</h3>
            <p>Trải nghiệm cuộc sống tiện nghi tại Ohana.</p>
          </div>
        </Carousel.Item>
        <Carousel.Item style={{ height: '600px' }}>
          <img
            className="d-block w-100 h-100" // Image style
            src="https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?ixlib=rb-4.0.3&auto=format&fit=crop&w=2080&q=80"
            alt="Living Space 2"
            style={{ objectFit: 'cover' }}
          />
          <div className="carousel-caption d-none d-md-block bg-dark bg-opacity-25" style={{ borderRadius: '15px' }}>
            <h3 className="fw-bold">Căn hộ cao cấp</h3>
            <p>Thiết kế tinh tế, nội thất sang trọng.</p>
          </div>
        </Carousel.Item>
        <Carousel.Item style={{ height: '600px' }}>
          <img
            className="d-block w-100 h-100"
            src="https://images.unsplash.com/photo-1493809842364-78817add7ffb?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
            alt="Living Space 3"
            style={{ objectFit: 'cover' }}
          />
          <div className="carousel-caption d-none d-md-block bg-dark bg-opacity-25" style={{ borderRadius: '15px' }}>
            <h3 className="fw-bold">Vị trí đắc địa</h3>
            <p>Kết nối thuận tiện, tiện ích xung quanh.</p>
          </div>
        </Carousel.Item>
      </Carousel>

      <div style={searchStyle}>
        <h4 className="text-center mb-4" style={{ color: '#0D6EFD' }}>Tìm kiếm căn hộ mơ ước</h4>
        <Form onSubmit={handleSearch}>
          <Row className="g-3">
            <Col md={3}>
              <Form.Select 
                name="location" 
                value={formData.location} 
                onChange={handleChange}
                className="shadow-none border-primary"
              >
                <option value="">Chọn khu vực</option>
                <option value="q1">Quận 1</option>
                <option value="q3">Quận 3</option>
                <option value="bt">Bình Thạnh</option>
              </Form.Select>
            </Col>
            <Col md={3}>
              <Form.Select 
                name="type" 
                value={formData.type} 
                onChange={handleChange}
                className="shadow-none border-primary"
              >
                <option value="">Loại phòng</option>
                <option value="studio">Studio</option>
                <option value="1br">1 Phòng ngủ</option>
                <option value="2br">2 Phòng ngủ</option>
              </Form.Select>
            </Col>
            <Col md={3}>
              <Form.Select 
                name="price" 
                value={formData.price} 
                onChange={handleChange}
                className="shadow-none border-primary"
              >
                <option value="">Mức giá</option>
                <option value="low">Dưới 5 triệu</option>
                <option value="medium">5 - 10 triệu</option>
                <option value="high">Trên 10 triệu</option>
              </Form.Select>
            </Col>
            <Col md={3}>
              <Button 
                variant="primary" 
                type="submit" 
                className="w-100 fw-bold"
                style={{ backgroundColor: '#0D6EFD' }}
              >
                <FaSearch className="me-2" /> Tìm kiếm
              </Button>
            </Col>
          </Row>
        </Form>
      </div>
    </div>
  );
};

export default Hero;
