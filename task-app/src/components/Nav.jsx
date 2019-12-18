import React from "react";
import Col from "react-bootstrap/Col";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { FaHome, FaUserCircle } from "react-icons/fa";
import { AiOutlineShoppingCart } from "react-icons/ai";

const NavContainer = () => {
  return (
    <Navbar collapseOnSelect variant="dark" style={{ backgroundColor: `#6c87b9` }} expand="md">
      <Col
        xs={{ span: "auto", order: 1 }}
        md={{ span: 9 }}
        lg={{ span: 10 }}
        xl={{ span: 11, order: 2 }}
      >
        <Navbar.Toggle aria-controls="navbar" />
        <Navbar.Collapse id="navbar">
          <Nav>
            <Nav.Item>
              <Nav.Link href="/about">About</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="/plans">Plans</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="/meals">Meals</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="/contact">Contact</Nav.Link>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Col>
      <Col
        xs={{ span: "auto", order: 2 }}
        md={{}}
        lg={{ span: "auto" }}
        xl={{ span: "auto", order: 1 }}
      >
        <Navbar.Brand href="/home">
          <FaHome />
        </Navbar.Brand>
      </Col>
      <Col
        xs={{ span: "auto", order: 3 }}
        lg={{ span: 1, order: 3 }}
        xl={{ span: "auto", order: 3 }}
      >
        <AiOutlineShoppingCart />
        <FaUserCircle />
      </Col>
    </Navbar>
  );
};

export default NavContainer;
