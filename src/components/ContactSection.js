import React from 'react'
import styled from 'styled-components'
import iver from '../images/iver.png'

const email = 'ivergentz@posteo.de'
const subject = '🤗'
const body = 'eigener Text'

const ContactSection = () => {
  return (
    <Container>
      <Header>
        <span className="header__bg">Klingt gut?</span>
      </Header>
      <ContactWrapper>
        <ContactText>
          Dann macht euch ein umfassendes Bild unter <i>CV</i>, oder genehmigt
          euch einen Blick auf meine <i>Zeugnisse</i>. <br />
          <br /> Freue mich über eine Antwort von euch!
        </ContactText>
        <ContactImg src={iver} alt="iver" />
      </ContactWrapper>
      <ContactLine>Iver Gentz | soon d.vinci?</ContactLine>
      <ContactLine>
        <a href="tel:004915906593897">01590 6593897</a>
      </ContactLine>
      <ContactLine>
        <a href={`mailto:${email}?subject=${subject || ''}&body=${body || ''}`}>
          ivergentz@posteo.de
        </a>
      </ContactLine>
    </Container>
  )
}

export default ContactSection

const Container = styled.section`
  margin: 0 auto;
  width: 90%;
`

const Header = styled.h3`
  color: #143a5a;
  font-weight: 600;
  font-size: 1.2rem;
  font-style: italic;

  .header__bg {
    background: #f4e287;
    padding: 0.5rem;
  }
`

const ContactWrapper = styled.div`
  display: inline-flex;
  flex-wrap: wrap;
`

const ContactText = styled.p`
  font-size: 1rem;
`

const ContactImg = styled.img`
  margin: 0 auto;
  border: none;
  border-radius: 150px;
  height: 200px;
  width: 200px;
  object-fit: cover;
  background: #f4e287;
`

const ContactLine = styled.p`
  display: flex;
  justify-content: center;
  font-weight: 800;
  margin: 1rem auto;

  a {
    text-decoration: none;
    text-decoration: none;
    cursor: pointer;
    color: #143a5a;
  }

  :nth-child(4) {
    font-size: 0.95rem;
  }
  :nth-child(5) {
    font-size: 0.95rem;
  }
`
