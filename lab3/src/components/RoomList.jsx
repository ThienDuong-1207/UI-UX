import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import RoomCard from './RoomCard';
import rooms from '../data/rooms';

const RoomList = () => {
  return (
    <section id="rooms" className="py-5" style={{ backgroundColor: '#F8F9FA' }}>
      <Container>
        <h2 className="text-center mb-5 fw-bold" style={{ color: '#0D6EFD' }}>Danh sách phòng nổi bật</h2>
        <Row className="g-4">
          {rooms.map(room => (
            <Col key={room.id} xs={12} md={6} lg={4}>
              <RoomCard room={room} />
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default RoomList;
