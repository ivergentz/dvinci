import {
  faGithub,
  faInstagram,
  faLinkedinIn,
  faXing,
} from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import styled from 'styled-components'

const email = 'ivergentz@posteo.de'
const subject = '🤗'
const body = 'eigener Text'

const Footer = () => {
  return (
    <Container>
      <SocialIcons>
        <a
          target="_blank"
          rel="noreferrer"
          href="https://www.instagram.com/ohne_ol"
        >
          <Icon icon={faInstagram}></Icon>
        </a>
        <a
          target="_blank"
          rel="noreferrer"
          href="https://www.xing.com/profile/Iver_Gentz/cv"
        >
          <Icon icon={faXing}></Icon>
        </a>
        <a
          target="_blank"
          rel="noreferrer"
          href="https://www.linkedin.com/in/iver-gentz-11b0a2171/"
        >
          <Icon icon={faLinkedinIn}></Icon>
        </a>
        <a
          target="_blank"
          rel="noreferrer"
          href="https://github.com/ivergentz/dvinci"
        >
          <Icon icon={faGithub}></Icon>
        </a>
      </SocialIcons>
      <FooterText>
        <a href={`mailto:${email}?subject=${subject || ''}&body=${body || ''}`}>
          i.gentz
        </a>
      </FooterText>
      <FooterBottom>
        <p>Freue mich</p>
        <p>über Feedback!</p>
        <p>wenn es positiv ist :)</p>
      </FooterBottom>
    </Container>
  )
}

export default Footer

const Container = styled.section`
  background: #143a5a;
  color: #fff;
  margin-top: 3rem;
`
const SocialIcons = styled.div`
  display: flex;
  justify-content: space-around;
  padding: 2rem 3rem;
`

const Icon = styled(FontAwesomeIcon)`
  color: #fff;
  font-size: 1.5rem;
  text-decoration: none;
  cursor: pointer;
`

const FooterText = styled.div`
  display: flex;
  padding-bottom: 1rem;

  a {
    text-decoration: none;
    text-decoration: none;
    cursor: pointer;
    color: #fff;
    padding: 0 1.5rem;
    margin: 0 auto;
    font-size: 2.5rem;
  }
`

const FooterBottom = styled.div`
  display: flex;
  justify-content: space-around;
  font-size: 0.75rem;
  padding-bottom: 1rem;
`
