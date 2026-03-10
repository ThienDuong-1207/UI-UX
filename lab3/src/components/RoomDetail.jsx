import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Container, Row, Col, Button, Badge, Form } from 'react-bootstrap';
import { FaBed, FaBath, FaExpand, FaCheck, FaPhone, FaArrowLeft } from 'react-icons/fa';
import rooms from '../data/rooms';

const RoomDetail = () => {
  const { id } = useParams();
  const room = rooms.find(r => r.id === parseInt(id));

  if (!room) {
    return (
      <Container className="py-5 mt-5 text-center">
        <h2>Không tìm thấy phòng này!</h2>
        <Link to="/">
          <Button variant="primary" className="mt-3">Về trang chủ</Button>
        </Link>
      </Container>
    );
  }

  // Tiện ích giả lập (thêm vào vì data gốc chưa có)
  const amenities = [
    "Wifi miễn phí", "Máy lạnh", "Tủ lạnh", "Máy giặt", 
    "Chỗ đậu xe", "An ninh 24/7", "Ban công", "Thang máy"
  ];

  return (
    <div style={{ marginTop: '80px', marginBottom: '50px' }}>
      <Container>
        {/* Breadcrumb / Back button */}
        <div className="mb-4">
            <Link to="/" className="text-decoration-none text-secondary d-flex align-items-center">
                <FaArrowLeft className="me-2" /> Quay lại danh sách
            </Link>
        </div>

        <Row className="gy-5">
          {/* Left Column: Image & Details */}
          <Col lg={8}>
            <div className="position-relative rounded-4 overflow-hidden shadow-sm mb-4">
              <img 
                src={room.image} 
                alt={room.title} 
                className="w-100" 
                style={{ height: '500px', objectFit: 'cover' }}
              />
              {room.isNew && (
                <Badge bg="danger" className="position-absolute top-0 start-0 m-4 py-2 px-3 fs-6">
                  Mới đăng
                </Badge>
              )}
            </div>

            <h1 className="fw-bold text-primary mb-2">{room.title}</h1>
            <p className="text-muted fs-5 mb-4">{room.location || "Quận Bình Thạnh, TP.HCM"}</p>

            <div className="d-flex gap-4 mb-4 border-bottom pb-4">
              <span className="d-flex align-items-center fs-5">
                <FaBed className="text-primary me-2" /> <strong>{room.beds}</strong> <span className="ms-1 text-muted">Phòng ngủ</span>
              </span>
              <span className="d-flex align-items-center fs-5">
                <FaBath className="text-primary me-2" /> <strong>{room.baths}</strong> <span className="ms-1 text-muted">Phòng tắm</span>
              </span>
              <span className="d-flex align-items-center fs-5">
                <FaExpand className="text-primary me-2" /> <strong>{room.area}</strong> <span className="ms-1 text-muted">m²</span>
              </span>
            </div>

            <div className="mb-5">
              <h3 className="fw-bold mb-3">Mô tả chi tiết</h3>
              <p className="text-secondary" style={{ lineHeight: '1.8' }}>
                {room.description}. Căn hộ được thiết kế theo phong cách hiện đại, tối ưu hóa không gian sử dụng. 
                Nội thất đầy đủ, cao cấp, chỉ cần xách vali vào ở. 
                Vị trí thuận lợi, gần các trung tâm thương mại, trường học và bệnh viện quốc tế.
                Môi trường sống văn minh, an ninh đảm bảo tuyệt đối.
              </p>
            </div>

            <div className="mb-5">
              <h3 className="fw-bold mb-3">Tiện nghi có sẵn</h3>
              <Row className="g-3">
                {amenities.map((item, index) => (
                  <Col key={index} xs={6} md={4}>
                    <div className="d-flex align-items-center">
                      <FaCheck className="text-success me-2" />
                      <span>{item}</span>
                    </div>
                  </Col>
                ))}
              </Row>
            </div>
          </Col>

          {/* Right Column: Pricing & Contact */}
          <Col lg={4}>
            <div className="sticky-top" style={{ top: '100px' }}>
              <div className="card border-0 shadow-sm p-4 text-center mb-4">
                <p className="text-muted mb-1">Giá thuê</p>
                <h2 className="text-primary fw-bold mb-3">{room.price}</h2>
                <Button variant="primary" size="lg" className="w-100 fw-bold mb-2">
                  <FaPhone className="me-2" /> Liên hệ ngay
                </Button>
                <Button variant="outline-primary" className="w-100 fw-semibold">
                  Yêu cầu tham quan
                </Button>
              </div>

              <div className="card border-0 shadow-sm p-4">
                <h4 className="fw-bold mb-3">Gửi tin nhắn</h4>
                <Form>
                  <Form.Group className="mb-3">
                    <Form.Control type="text" placeholder="Họ tên của bạn" />
                  </Form.Group>
                  <Form.Group className="mb-3">
                    <Form.Control type="email" placeholder="Email" />
                  </Form.Group>
                  <Form.Group className="mb-3">
                    <Form.Control type="tel" placeholder="Số điện thoại" />
                  </Form.Group>
                  <Form.Group className="mb-3">
                    <Form.Control as="textarea" rows={3} placeholder="Tôi quan tâm đến căn này..." />
                  </Form.Group>
                  <Button variant="primary" className="w-100">Gửi tin nhắn</Button>
                </Form>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default RoomDetail;
