import React from "react";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Image from "react-bootstrap/Image";

import { FaUserCircle } from "react-icons/fa";
import { AiOutlineShoppingCart } from "react-icons/ai";

import Logo from "../data/image16.png";

const NavContainer = () => {
  return (
    <Navbar
      collapseOnSelect
      variant="dark"
      style={{ backgroundColor: `#6c87b9` }}
      expand="md"
    >
      <Navbar.Brand>
        <Image src={Logo} />
      </Navbar.Brand>
      <AiOutlineShoppingCart className="nav-shop m-2" />
      <FaUserCircle className="nav-profile m-2" />
      <Navbar.Toggle />
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
    </Navbar>
  );
};

export default NavContainer;
