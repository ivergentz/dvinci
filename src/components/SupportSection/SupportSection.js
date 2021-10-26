import React from 'react'
import styled from 'styled-components'

const SupportSection = ({ entries }) => {
  return (
    <Container>
      <Header>
        <span className="header__bg">Unterstützt mich!</span>
      </Header>
      {entries.map(entry => (
        <SupportWrapper key={entry.id}>
          <SupportSymbol src={entry.img} alt="symbol picture" />
          <SupportHeader>{entry.head}</SupportHeader>
          <SupportText>{entry.text}</SupportText>
        </SupportWrapper>
      ))}
    </Container>
  )
}

export default SupportSection

const Container = styled.section`
  background: #143a5a;
  color: #fff;
  width: 90%;
  margin: 3rem auto;
  padding: 0 1.5rem;

  @media (min-width: 768px) {
    position: relative;
    width: 100vw;
    margin: 10vh auto;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr;
  }
`

const Header = styled.h3`
  color: #143a5a;
  font-weight: 600;
  font-style: italic;
  padding: 2rem 0 0 1rem;

  .header__bg {
    background: #f4e287;
    padding: 0.5rem;
    font-size: 1.2rem;
  }
`

const SupportSymbol = styled.img`
  width: 80px;
  margin-top: 2.5rem;
`

const SupportWrapper = styled.div`
  :last-child {
    padding-bottom: 2rem;
  }
`

const SupportHeader = styled.h4`
  margin: 0;
  font-size: 1rem;
`

const SupportText = styled.p`
  margin-top: 0;
  font-size: 1rem;
`
