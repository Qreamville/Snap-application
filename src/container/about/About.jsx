import React from 'react'
import { Container } from 'react-bootstrap'
import './About.css'

const About = () => {
  return (
    <section >
      <Container className='about text-center'>
        <h1>WHAT DO WE DO</h1>
        <div><p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti minima quibusdam sequi ex! Ad doloribus, natus tenetur itaque ipsam voluptatem porro inventore labore cumque, similique eius iusto libero sit dicta?
        </p>
        </div>
        <div><p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti minima quibusdam sequi ex! Ad doloribus, natus tenetur itaque ipsam voluptatem porro inventore labore cumque, similique eius iusto libero sit dicta?
        </p>
        </div>
        <div>
          <button className='btn btn-primary'>
            Learn More
          </button>
        </div>
      </Container>
    </section>
  )
}

export default About