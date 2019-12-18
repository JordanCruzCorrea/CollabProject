import React from 'react'
import Nav from 'react-bootstrap/Nav'
import { NavLink } from 'react-router-dom'
import { FaHome, FaUserCircle } from "react-icons/fa";
import {  AiOutlineShoppingCart } from 'react-icons/ai';

const NavContainer = () => {
  return (
    <div className="navigation">
      <Nav>
        <Nav.Link>
          <Nav.Link className='navbar' to='/home'><FaHome></FaHome></Nav.Link>
        </Nav.Link>
        <Nav.Item>
          <Nav.Link className='navbar' to='/about'>About</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link className='navbar' to='/plans'>Plans</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link className='navbar' to='/meals'>Meals </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link className='navbar' to='/contact'>Contact</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link className='navbar' to='/cart'><AiOutlineShoppingCart></AiOutlineShoppingCart></Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link className='navbar' to='/user'><FaUserCircle></FaUserCircle></Nav.Link>
        </Nav.Item>
      </Nav>
    </div>

  )
}


export default NavContainer