import React from 'react'
import { Container, Card, Col, Row } from 'react-bootstrap'
import './careerHeader.css'


const CareerHeader = () => {
  return (
    <div className='careers'>
      <div className="careers__image"></div>
      <div className="career__form">
        <Container>
          <form action="" className='form'>
            <p>JOB SEARCH</p>
            <input type="text" placeholder='Keywords' />
            <select>
              <option>Category</option>
              <option value="Arts">Arts</option>
              <option value="Computer">Computer</option>
              <option value="Engineering">Engineering</option>
              <option value="Programming">Programming</option>
            </select>
            <select name="" id="">
              <option value="">Location</option>
              <option value="Lagos">Lagos</option>
              <option value="Abuja">Abuja</option>
              <option value="Jos">Jos</option>
            </select>
            <button type="submit" className='btn btn-primary'>Search</button>
          </form>
        </Container>
      </div>
      <Container className="career__featured text-center">
        <h2>FEATURED JOBS</h2>
        <Row className='g-3'>
          <Col lg={3} md={6}>
            <Card>
              <Card.Body>
                <h5>Content Producer</h5>
                <p>Arts, Music, Socials</p>
              </Card.Body>
            </Card>
          </Col>
          <Col lg={3} md={6}>
            <Card>
              <Card.Body>
                <h5>Content Creator</h5>
                <p>Arts, Music, Socials</p>
              </Card.Body>
            </Card>
          </Col>
          <Col lg={3} md={6}>
            <Card>
              <Card.Body>
                <h5>Frontend Developer</h5>
                <p>Arts, Music, Socials</p>
              </Card.Body>
            </Card>
          </Col>
          <Col lg={3} md={6}>
            <Card>
              <Card.Body>
                <h5>Ui/Ux Engineer</h5>
                <p>Arts, Music, Socials</p>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default CareerHeader