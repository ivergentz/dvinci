import React from 'react'
import styled from 'styled-components'
import checkedChekmark from '../images/checkedCheckmark.svg'

const JobSection = () => {
  return (
    <>
      <Container>
        <Headline>Moin!</Headline>
        <JobBanner>
          <h1>
            <span className="header__bg">
              Bewerbung: <br />
              Frontend- / Web-Entwickler:in (React)
            </span>
          </h1>
        </JobBanner>
        <SectionList>
          <li>
            <img src={checkedChekmark} alt="checkmark" />
            <p> Iver Gentz</p>
          </li>
          <li>
            <img src={checkedChekmark} alt="checkmark" />
            <p>Frontend Developer</p>
          </li>
          <li>
            <img src={checkedChekmark} alt="checkmark" />
            <p>ab sofort</p>
          </li>
        </SectionList>
        <ShortText>
          Moin d.vinci-Team, <br /> ich würde gern zu euch an Bord kommen! Da
          ich Quereinsteiger bin und noch nicht viele Projekte vorweisen kann
          habe ich eure Seite einmal nachgebaut. Ich bin zwar groß wie eine
          Stange, dennoch sehr vielseitig und würde mich freuen meine
          Entwickler-Skills bei euch einzubringen und erweitern zu können!
        </ShortText>
      </Container>
    </>
  )
}

export default JobSection

const Container = styled.section`
  width: 100%;
  float: left;
  padding-right: 1rem;
  padding-left: 1rem;
`

const Headline = styled.h2`
  text-transform: uppercase;
  font-weight: bold;
  margin-bottom: -4vh;
  font-size: 4.25rem;
  margin-top: 1.6rem;
`
const JobBanner = styled.div`
  max-width: 870px;

  h1 {
    font-style: italic;
    line-height: 2.6rem;
    font-size: 1.8rem;
    font-weight: 500;
  }
  .header__bg {
    background-color: #f4e287;
    padding: 0.5rem;
  }
`

const SectionList = styled.ul`
  list-style: none;
  margin-top: 1rem;
  margin-bottom: 0.8rem;
  padding: 0;

  @media (min-width: 768px) {
    display: inline;

    li {
      display: inline;
      padding-right: 1rem;
    }
  }

  li {
    line-height: 1.8rem;
  }

  img {
    vertical-align: middle;
    max-width: 35px;
    border: 0;
  }
  p {
    display: inline;
  }
`

const ShortText = styled.p`
  margin-top: 2rem;
  position: relative;
  min-height: 1px;
  font-size: 1rem;

  @media (min-width: 768px) {
    font-size: 1.2rem;
    line-height: 1.5rem;
    width: 45%;
    margin-top: 4rem;
    padding: 0 1rem;
  }
`
