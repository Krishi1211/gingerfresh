// Navbar
import React from 'react';
import PropTypes from 'prop-types';
import './Navbar.css';

export default function Navbar(props) {
  const { active } = props;
  return (
    <nav className={`navbar ${active ? 'active' : ''}`}>
      <a href="#home" style={{color:'white'}}>Home</a>
      <a href="#features" style={{color:'white'}}>Services</a>
      <a href="#products" style={{color:'white'}}>About Us</a>
      <a href="#categories" style={{color:'white'}}>Categories</a>
      <a href="#reviews" style={{color:'white'}}>Contacts</a>
    </nav>
  );
}
Navbar.propTypes = {
  active: PropTypes.bool,
}.isRequired;
