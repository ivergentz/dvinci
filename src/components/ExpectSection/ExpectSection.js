import React from 'react'
import styled from 'styled-components'
import checkedCheckmark from '../../images/checkedCheckmarkWhite.svg'

const ExpectSection = ({ entries }) => {
  return (
    <SectionContainer>
      <Header>Was könnt ihr von mir erwarten:</Header>
      <Container>
        <Wrapper>
          <p>
            Mit mir bekommt ihr einen noch nicht fertigen Entwickler. Ihr habt
            also die Chance mich noch in die richtige Richtung zu developen!
            Gespür für Grafik, Design und ansprechenden Auftritt bringe ich aus
            meinen vorherigen Jobs mit. Das Coden habe ich hier in Hamburg bei
            neuefische gelernt.
          </p>
          <ul>
            {entries.map(entry => (
              <li key={entry.id}>
                <Checkmark src={checkedCheckmark} alt="checked" />
                <ListText>{entry.text}</ListText>
              </li>
            ))}
          </ul>
        </Wrapper>
      </Container>
    </SectionContainer>
  )
}

export default ExpectSection

const SectionContainer = styled.section`
  max-width: 768px;
  margin: 0 auto;

  @media (min-width: 1200px) {
    margin-right: 0;
  }
`

const Header = styled.h2`
  position: relative;
  left: 2rem;
  background: #f4e287;
  padding: 0.3rem 0.6rem 0.1rem 0.3rem;
  margin-top: 3rem;
  display: table;
  font-size: 1.3rem;
  font-style: italic;
  font-weight: 400;
  z-index: 10;

  @media (min-width: 768px) {
    left: 4rem;
  }
`

const Container = styled.section`
  width: 90%;
  margin: 0 auto;
  margin-top: -2rem;
  background: #143a5a;
  color: #fff;
  border-radius: 30px;
  z-index: 1;

  ul {
    padding: 0;
    margin: 0;
  }

  li {
    display: flex;
    font-weight: 300;
    list-style-type: none;
  }
`

const ListText = styled.p`
  font-size: 1rem;
  margin-top: 2px;
`

const Wrapper = styled.div`
  padding: 1rem;

  p {
    font-size: 1rem;
  }

  @media (min-width: 768px) {
    line-height: 1.3rem;
  }
`

const Checkmark = styled.img`
  height: 1.4rem;
`
