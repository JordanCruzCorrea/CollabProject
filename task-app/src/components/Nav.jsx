import React from "react";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Image from "react-bootstrap/Image";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

import { FaUserCircle } from "react-icons/fa";
import { AiOutlineShoppingCart } from "react-icons/ai";

import Logo from "../data/image16.png";

const NavContainer = () => {
  const [show, setShow] = React.useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [showCart, setCartShow] = React.useState(false);
  const handleCloseCart = () => setCartShow(false);
  const handleShowCart = () => setCartShow(true);

  return (
    <Navbar collapseOnSelect variant="light" expand="md">
      <Navbar.Brand>
        <Image src={Logo} />
      </Navbar.Brand>
      <span className="nav-shop"><AiOutlineShoppingCart
        onClick={handleShowCart}
        className="nav-shop-icon"
      /></span>
      <span className="nav-profile"><FaUserCircle onClick={handleShow} className="nav-profile-icon" /></span>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Profile</Modal.Title>
        </Modal.Header>
        <Modal.Body>This is your profile</Modal.Body>
        <Modal.Footer>
          <Button onClick={handleClose}>Close</Button>
        </Modal.Footer>
      </Modal>
      <Modal show={showCart} onHide={handleCloseCart}>
        <Modal.Header closeButton>
          <Modal.Title>Cart</Modal.Title>
        </Modal.Header>
        <Modal.Body>This is your cart</Modal.Body>
        <Modal.Footer>
          <Button onClick={handleCloseCart}>Close</Button>
        </Modal.Footer>
      </Modal>
      <Navbar.Toggle />
      <Navbar.Collapse id="navbar">
        <Nav variant="tabs" defaultActiveKey="/home">
          <Nav.Item>
            <Nav.Link style={{ backgroundColor: '#6c87b9', color: 'white' }} href="/home">Home</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link>About</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link>Plans</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link>Meals</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link>Contact</Nav.Link>
          </Nav.Item>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavContainer;
