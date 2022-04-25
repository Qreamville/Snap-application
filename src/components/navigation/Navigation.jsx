import React from 'react'
import "./navigation.css"
import { LinkContainer } from 'react-router-bootstrap'
import iconTodo from '../../asset/icon-todo.svg'
import iconCalender from '../../asset/icon-calendar.svg'
import iconReminders from '../../asset/icon-reminders.svg'
import iconPlanning from '../../asset/icon-planning.svg'
import { Navbar, Nav, NavDropdown } from 'react-bootstrap'

const Navigation = () => {
  return (
    <Navbar expand="md" >

      <LinkContainer to='/'>
        <Navbar.Brand>Snap</Navbar.Brand>
      </LinkContainer>
      <Navbar.Toggle aria-controls="navbar-collapse-id" />
      <Navbar.Collapse id="navbar-collapse-id">
        <NavDropdown title="Features" id="nav-dropdown">
          <NavDropdown.Item eventKey="event-key"><img src={iconTodo} alt="iconTodo" /> Todo List</NavDropdown.Item>
          <NavDropdown.Item eventKey="event-key"><img src={iconCalender} alt="iconCalender" /> Calender</NavDropdown.Item>
          <NavDropdown.Item eventKey="event-key"><img src={iconReminders} alt="iconReminders" /> Reminders</NavDropdown.Item>
          <NavDropdown.Item eventKey="event-key"><img src={iconPlanning} alt="iconPlanning" /> Planing</NavDropdown.Item>
        </NavDropdown>
        <NavDropdown title="Company" id="nav-dropdown">
          <NavDropdown.Item eventKey="event-key">History</NavDropdown.Item>
          <NavDropdown.Item eventKey="event-key">Our Team</NavDropdown.Item>
          <NavDropdown.Item eventKey="event-key">Blog</NavDropdown.Item>
        </NavDropdown>
        <Nav>
          <LinkContainer to='/careers'>
            <Nav.Link href='#contact'>Careers</Nav.Link>
          </LinkContainer>

          <LinkContainer to='/about'>
            <Nav.Link href='#contact'>About</Nav.Link>
          </LinkContainer>
        </Nav>
        <Nav className='ms-auto'>
          <Nav.Link >Login</Nav.Link>
          <Nav.Link className='nav-sign btn btn-outline-primary'>Register</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>

  )
}

export default Navigation
