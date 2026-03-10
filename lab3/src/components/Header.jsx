import React from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';
import { NavHashLink } from 'react-router-hash-link';

const Header = () => {
  const scrollWithOffset = (el) => {
    const yCoordinate = el.getBoundingClientRect().top + window.pageYOffset;
    const yOffset = -70; 
    window.scrollTo({ top: yCoordinate + yOffset, behavior: 'smooth' }); 
  }

  return (
    <Navbar bg="white" expand="lg" fixed="top" className="shadow-sm">
      <Container>
        <Navbar.Brand 
          as={NavHashLink} 
          smooth to="/#home"
          scroll={scrollWithOffset}
          style={{ color: '#0D6EFD', fontWeight: 'bold', fontSize: '1.5rem', cursor: 'pointer' }}
        >
          OHANA
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto" style={{ fontWeight: '500' }}>
            <Nav.Link as={NavHashLink} smooth to="/#home" scroll={scrollWithOffset} className="mx-2">Trang chủ</Nav.Link>
            <Nav.Link as={NavHashLink} smooth to="/#rooms" scroll={scrollWithOffset} className="mx-2">Danh sách phòng</Nav.Link>
            <Nav.Link as={NavHashLink} smooth to="/#facilities" scroll={scrollWithOffset} className="mx-2">Tiện ích</Nav.Link>
            <Nav.Link as={NavHashLink} smooth to="/#contact" scroll={scrollWithOffset} className="mx-2">Liên hệ</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
