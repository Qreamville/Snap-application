import React from 'react'
import './header.css'
import { Container } from 'react-bootstrap'
import audiophile from '../../asset/client-audiophile.svg'
import databiz from '../../asset/client-databiz.svg'
import maker from '../../asset/client-maker.svg'
import meet from '../../asset/client-meet.svg'
import hero from '../../asset/image-hero-desktop.png'

const Header = () => {
  return (
    <header>
      <Container className="header">
        <div className="header__text">
          <div className="header__text-heading">
            <h1>Make remote work</h1>
          </div>
          <div className="header__text-paragraph">
            <p>Get your team in sync, no matter your location. Streamline processes, create team rituals, and watch productivity soar.</p>
          </div>
          <div className="header__text-btn">
            <button className="btn">Learn More</button>
          </div>
          <div className="header__brand">
            <img src={databiz} alt="databiz" />
            <img src={audiophile} alt="audiophile" />
            <img src={meet} alt="meet" />
            <img src={maker} alt="maker" />
          </div>
        </div>
        <div className="header__image">
          <img src={hero} alt="hero" />
        </div>
      </Container>
    </header>
  )
}

export default Header