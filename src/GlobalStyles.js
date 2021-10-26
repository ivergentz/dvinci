import React from 'react'
import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
* {
  box-sizing: border-box;

}

body {
  overflow-x: hidden;
  margin: 0 auto;
  font-weight: 300;
  font-size: 18px;
  font-family: 'Overpass', sans-serif;
  color: #003a5d;
  padding-top: 85px;

  background: url('https://demo-jdtzs.dvinci.info/image/HOSTED/pcrC8mfpWdhOvpFnxSuNRQmS6vKFLQUcfDklV5vVJqbMezUeNmF') no-repeat;
  background-attachment: scroll;
  background-origin: padding-box;
  background-clip: border-box;
  background-size: 100%;
  background-position: top -10vw right -30vw; 

  @media (min-width: 480px) {
    background-attachment: scroll;
    background-origin: padding-box;
    background-clip: border-box;
    background-position: top -25vw right -30vw;  
  }

}
`

export default function Layout({ children }) {
  return (
    <React.Fragment>
      <GlobalStyle />
      {children}
    </React.Fragment>
  )
}
