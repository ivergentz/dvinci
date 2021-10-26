import React from 'react'
import styled from 'styled-components'
import backgroundImg from '../../images/backgroundImg.svg'
import checkedCheckmark from '../../images/checkedCheckmark.svg'
import placeholderImg from '../../images/iver.png'
import play from '../../images/play.svg'
import uncheckedCheckmark from '../../images/uncheckedCheckmark.svg'

const FactsSection = ({ entries }) => {
  return (
    <>
      <SectionListContainer>
        <FactsBg src={backgroundImg} alt="placeholder">
          <img src={placeholderImg} alt="placeholder" />
        </FactsBg>
        <FactsWithHeader>
          <FactsHeader>
            <span className="header__bg">Ein paar Facts zu mir:</span>
          </FactsHeader>
          <SectionList>
            {entries.map(entry => (
              <li key={entry.id}>
                {entry.isChecked ? (
                  <Checkmark src={checkedCheckmark} alt="checked" />
                ) : (
                  <Checkmark src={uncheckedCheckmark} alt="unchecked" />
                )}
                {entry.isChecked ? (
                  <CheckedText>{entry.text}</CheckedText>
                ) : (
                  <UnchekedText>{entry.text}</UnchekedText>
                )}
              </li>
            ))}
          </SectionList>

          <BtnWrapper>
            <Button
              href="https://drive.google.com/file/d/1M9IcHqESYnwalLBPblMPZKgGo9v_WgS0/view?usp=sharing"
              target="_blank"
              rel="noreferrer"
            >
              <img src={play} alt="play button" />
              <BtnText>Zeugnisse</BtnText>
            </Button>
          </BtnWrapper>
        </FactsWithHeader>
      </SectionListContainer>
    </>
  )
}

export default FactsSection

const SectionListContainer = styled.div`
  float: left;
  padding-left: 1rem;
  width: 100%;
  margin-bottom: 10vh;

  @media (min-width: 768px) {
    margin-top: 3vh;
    display: grid;
    grid-template-columns: 1.5fr 1fr;
    grid-template-rows: 1fr;
  }
`

const FactsWithHeader = styled.div`
  @media (min-width: 768px) {
  }
`

const FactsHeader = styled.h3`
  font-weight: 400;
  font-style: italic;
  margin-bottom: 0;

  .header__bg {
    background-color: #f4e287;
    padding: 0.2rem;
  }

  @media (min-width: 768px) {
    font-size: 1.2rem;
  }
`

const FactsBg = styled.div`
  display: none;

  @media (min-width: 768px) {
    position: relative;
    background: url('https://demo-jdtzs.dvinci.info/image/HOSTED/pcrC8mfpWdhOvpFnxSuNRQmS6vKFLQUcfDklV5vVJqbMezUeNmF')
      no-repeat;
    background-attachment: scroll;
    background-origin: padding-box;
    background-clip: border-box;
    background-size: 100%;
    display: flex;
    width: auto;
    padding: 3vw;

    img {
      position: absolute;
      width: 15vw;
      object-fit: cover;
      margin-top: -5vh;
      margin-left: 15vh;
      transform: rotate(-3deg);
    }

    @media (min-width: 1200px) {
      img {
        width: 15vw;
        margin-top: -4vh;
      }
    }
  }
`

const SectionList = styled.ul`
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  padding: 0;

  li {
    list-style: none;
    margin-bottom: -5px;
  }
`

const Checkmark = styled.img`
  width: 30px;
  vertical-align: middle;
  margin: 0;
  margin-bottom: 9px;
`

const CheckedText = styled.p`
  display: inline;
  margin-left: 1rem;
  font-size: 1rem;

  @media (min-width: 768px) {
    font-size: 1.2rem;
  }
`

const UnchekedText = styled.p`
  display: inline;
  margin-left: 1rem;
  font-size: 1rem;
  text-decoration-line: line-through;
  text-decoration-style: solid;
  text-decoration-thickness: 2px;
  text-decoration-color: #ea5045;

  @media (min-width: 768px) {
    font-size: 1.2rem;
  }
`
const BtnWrapper = styled.div`
  display: flex;
  margin-top: 2rem;
`

const Button = styled.a`
  color: #003a5d;
  border: 4px solid #f4e287;
  border-radius: 3px;
  background: transparent;
  cursor: pointer;
  text-decoration: none;
  padding: 1rem;
  @media (min-width: 768px) {
    font-size: 1.2rem;
  }

  img {
    vertical-align: middle;
    width: 35px;
    margin-right: 0.7rem;
  }

  :hover {
    background: #f4e287;
  }
`

const BtnText = styled.p`
  display: inline;
  font-size: 1.2rem;
  font-weight: 500;
`
