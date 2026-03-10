import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaShieldAlt, FaWifi, FaBroom } from 'react-icons/fa';

const Facilities = () => {
  const iconStyle = {
    fontSize: '3.5rem',
    color: '#0D6EFD',
    marginBottom: '1rem',
    transition: 'transform 0.3s',
  };

  const facilities = [
    { id: 1, icon: <FaShieldAlt style={iconStyle} />, title: "An ninh 24/7", desc: "Hệ thống bảo vệ và camera giám sát hoạt động liên tục." },
    { id: 2, icon: <FaWifi style={iconStyle} />, title: "Wifi miễn phí", desc: "Kết nối internet tốc độ cao tại mọi khu vực." },
    { id: 3, icon: <FaBroom style={iconStyle} />, title: "Vệ sinh định kỳ", desc: "Dịch vụ dọn dẹp vệ sinh chuyên nghiệp hàng tuần." }
  ];

  return (
    <section id="facilities" className="py-5" style={{ backgroundColor: '#E7F1FF' }}>
      <Container>
        <h2 className="text-center mb-5 fw-bold" style={{ color: '#0D6EFD' }}>Tiện ích nổi bật</h2>
        <Row className="text-center g-4">
          {facilities.map(item => (
            <Col key={item.id} md={4}>
              <div 
                className="p-4 h-100 bg-white shadow-sm rounded-3 hover-effect"
                style={{ transition: 'transform 0.3s', cursor: 'default' }}
                onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-5px)'}
                onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
              >
                {item.icon}
                <h4 className="card-title fw-bold text-dark">{item.title}</h4>
                <p className="card-text text-muted mt-2">{item.desc}</p>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Facilities;
