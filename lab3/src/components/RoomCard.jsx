import React, { useState } from 'react';
import { Card, Button, Badge } from 'react-bootstrap';
import { FaBed, FaBath, FaExpand } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const RoomCard = ({ room }) => {
  const [hover, setHover] = useState(false);

  const cardStyle = {
    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
    transform: hover ? 'scale(1.02)' : 'scale(1)',
    boxShadow: hover ? '0 10px 20px rgba(0,0,0,0.15)' : '0 4px 6px rgba(0,0,0,0.1)',
    height: '100%',
    cursor: 'pointer',
    border: 'none'
  };

  return (
    <Card 
      style={cardStyle}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      className="h-100 overflow-hidden" 
    >
      <div className="position-relative">
        <Card.Img 
          variant="top" 
          src={room.image} 
          alt={room.title}
          style={{ height: '200px', objectFit: 'cover' }}
        />
        {room.isNew && (
          <Badge 
            bg="danger" 
            className="position-absolute top-0 start-0 m-3 py-2 px-3 shadow"
            style={{ fontSize: '0.8rem' }}
          >
            Mới đăng
          </Badge>
        )}
        <Badge 
          bg="primary" 
          className="position-absolute bottom-0 end-0 m-3 py-2 px-3 shadow" 
          style={{ fontSize: '0.9rem' }}
        >
          {room.price}
        </Badge>
      </div>
      <Card.Body className="d-flex flex-column">
        <Card.Title className="fw-bold mb-3 text-truncate" title={room.title}>
          {room.title}
        </Card.Title>
        <Card.Text className="text-muted small mb-4">
          {room.description}
        </Card.Text>
        
        <div className="d-flex justify-content-between mb-4 text-secondary small">
          <span><FaBed className="me-1"/> {room.beds} PN</span>
          <span><FaBath className="me-1"/> {room.baths} WC</span>
          <span><FaExpand className="me-1"/> {room.area}m²</span>
        </div>

        <Link to={`/rooms/${room.id}`}>
          <Button variant="outline-primary" className="mt-auto w-100 fw-semibold">
            Xem chi tiết
          </Button>
        </Link>
      </Card.Body>
    </Card>
  );
};

export default RoomCard;
