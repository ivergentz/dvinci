import React from 'react'
import styled from 'styled-components'

const firstSize = 2
const secondSize = 4

const SupportSection = ({ entries }) => {
  const firstItems = entries.slice(0, firstSize)
  const secondItems = entries.slice(2, secondSize)

  console.log(secondItems)

  return (
    <>
      <Container>
        <div className="flex">
          <Row>
            <Header>
              <span className="header__bg">Unterstützt mich bei:</span>
            </Header>
          </Row>

          <Row>
            {firstItems.map(entry => (
              <>
                <SupportWrapper key={entry.id}>
                  <SupportSymbol src={entry.img} alt="symbol picture" />
                  <SupportHeader>{entry.head}</SupportHeader>
                  <SupportText>{entry.text}</SupportText>
                </SupportWrapper>
              </>
            ))}
          </Row>

          <Row>
            {secondItems.map(entry => (
              <>
                <SupportWrapper key={entry.id}>
                  <SupportSymbol src={entry.img} alt="symbol picture" />
                  <SupportHeader>{entry.head}</SupportHeader>
                  <SupportText>{entry.text}</SupportText>
                </SupportWrapper>
              </>
            ))}
          </Row>
        </div>
      </Container>
    </>
  )
}

export default SupportSection

const Container = styled.section`
  background: #143a5a;
  color: #fff;
  width: 100%;
  margin: 3rem auto;
  padding: 0 1.5rem;
  padding-bottom: 3rem;

  .flex {
    max-width: 1100px;
    margin: 0 auto;
  }

  @media (max-width: 768px) {
    width: 90%;
    margin-top: 6rem;
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

    @media (min-width: 768px) {
      font-size: 1.5rem;
    }
  }
`

const Row = styled.div`
  display: flex;

  @media (max-width: 768px) {
    display: grid;
  }
`

const SupportSymbol = styled.img`
  width: 80px;
  margin-top: 2.5rem;
`

const SupportWrapper = styled.div`
  width: 50%;
  padding-left: 1rem;
  justify-content: center;

  @media (max-width: 768px) {
    width: 100%;
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
