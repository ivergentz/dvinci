import React from 'react'
import styled from 'styled-components'
import iver from '../images/iver.png'

const ContactSection = email => {
  return (
    <Container>
      <Header>
        <span className="header__bg">Klingt gut?</span>
      </Header>
      <ContactText>
        Dann macht euch ein umfassendes Bild von mir unter <i>CV</i>,{' '}
        <i>Zeugnisse</i> oder dem{' '}
        <i>github-Link und dem Source Code dieser Seite</i> im Footer!
        <br />
        <br /> Freue mich über eine Antwort von euch!
      </ContactText>
      <div className="flex">
        <ImgWrapper>
          <ContactImg src={iver} alt="iver" />
        </ImgWrapper>
        <div className="row">
          <ContactLine>Iver Gentz | soon d.vinci?</ContactLine>
          <ContactLine>
            <a href="tel:004915906593897">01590 6593897</a>
          </ContactLine>
          <ContactLine>
            <a
              href={`mailto:${email.email}?subject=${
                email.subject || ''
              }&body=${email.body || ''}`}
            >
              ivergentz@posteo.de
            </a>
          </ContactLine>
        </div>
      </div>
    </Container>
  )
}

export default ContactSection

const Container = styled.section`
  max-width: 1100px;
  margin: 0 auto;
  width: 90%;

  .flex {
    @media (min-width: 768px) {
      display: flex;
    }

    .row {
      @media (min-width: 768px) {
        padding-left: 4rem;
        margin-top: 30px;
      }
    }
  }
`

const Header = styled.h3`
  color: #143a5a;
  font-weight: 600;
  font-size: 1.2rem;
  font-style: italic;

  .header__bg {
    background: #f4e287;
    padding: 0.5rem;

    @media (min-width: 768px) {
      font-size: 1.5rem;
    }
  }
`

const ContactText = styled.p`
  font-size: 1rem;
`

const ImgWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin: 2rem 0;

  @media (min-width: 768px) {
    margin: 0;
  }
`

const ContactImg = styled.img`
  border: none;
  border-radius: 150px;
  height: 200px;
  width: 200px;
  object-fit: cover;
  background: #f4e287;

  @media (min-width: 768px) {
    justify-content: flex-start;
    align-items: center;
  }
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

    @media (min-width: 768px) {
      font-size: 1.2rem;
    }
  }

  :nth-child(4) {
    font-size: 0.95rem;
  }
  :nth-child(5) {
    font-size: 0.95rem;
  }

  @media (min-width: 768px) {
    display: flex;
    justify-content: flex-start;
    align-items: center;
  }
`
