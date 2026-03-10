import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import RoomList from './components/RoomList';
import Facilities from './components/Facilities';
import ContactArea from './components/ContactArea';
import RoomDetail from './components/RoomDetail';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={
            <>
              <Hero />
              <RoomList />
              <Facilities />
              <ContactArea />
            </>
          } />
          <Route path="/rooms/:id" element={<RoomDetail />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
