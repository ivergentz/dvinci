import React from 'react'
import styled from 'styled-components'
import checkedCheckmark from '../../images/checkedCheckmarkYellow.svg'

const MatchSection = ({ entries }) => {
  return (
    <SectionContainer>
      <Header>Matcht es?</Header>
      <Container>
        <Wrapper>
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

export default MatchSection

const SectionContainer = styled.section`
  max-width: 768px;
  margin: 0 auto;

  @media (min-width: 1200px) {
    margin-left: 0;
  }
`

const Header = styled.h2`
  max-width: 768px;
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
  padding-top: 2rem;
  background: rgb(99, 193, 175);
  color: #143a5a;
  width: 90%;
  margin: 0 auto;
  margin-top: -2rem;
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
  margin-top: 2px;
`

const Wrapper = styled.div`
  padding: 1rem;

  p {
    @media (min-width: 768px) {
      font-size: 1rem;
    }
  }
`

const Checkmark = styled.img`
  height: 1.4rem;
`
