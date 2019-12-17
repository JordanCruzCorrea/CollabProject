import React from 'react'
import Nav from 'react-bootstrap/Nav'
import { FaHome, FaUserCircle } from "react-icons/fa";
import {  AiOutlineShoppingCart } from 'react-icons/ai';

const NavContainer = () => {
  return (
    <div className="navigation">
      <Nav
        activeKey="/home"
        onSelect={selectedKey => alert(`selected ${selectedKey}`)}
      >
        <Nav.Link>
          <Nav.Link href="/home"><FaHome></FaHome></Nav.Link>
        </Nav.Link>
        <Nav.Item>
          <Nav.Link eventKey="link-1">About</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-2">Plans</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-3">Meals </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-3">Contact</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="/home"><AiOutlineShoppingCart></AiOutlineShoppingCart></Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="/home"><FaUserCircle></FaUserCircle></Nav.Link>
        </Nav.Item>
      </Nav>
    </div>

  )
}


export default NavContainer