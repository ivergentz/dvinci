import React, { useEffect, useState } from 'react'
import styled from 'styled-components'

const heading = 'i.gentz'
const btntext = 'CV'

const Header = email => {
  const [scrollNav, setScrollNav] = useState(false)

  const changeNav = () => {
    window.scrollY >= 40 ? setScrollNav(true) : setScrollNav(false)
  }

  useEffect(() => {
    window.addEventListener('scroll', changeNav)
  })

  return (
    <>
      <LogoContainer onScroll={scrollNav ? setScrollNav : undefined}>
        <NavLogo
          href={`mailto:${email.email}?subject=${email.subject || ''}&body=${
            email.body || ''
          }`}
        >
          {heading}
        </NavLogo>
        <NavBtn
          // onClick={toggleCv}
          onScroll={scrollNav ? setScrollNav : undefined}
          href="https://drive.google.com/file/d/171MN5_E6b8CwDRn1rNjDkDzhf8MN2Gps/view?usp=sharing"
          target="_blank"
          el="noreferr"
        >
          {btntext}
        </NavBtn>
      </LogoContainer>
    </>
  )
}

export default Header

const LogoContainer = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  top: 0;
  background: ${({ onScroll }) => (onScroll ? '#fff' : 'transparent')};
  position: fixed;
  right: 0;
  left: 0;
  width: 100vw;
  min-height: 68px;
  margin-bottom: 25px;
  transition: 0.5s all ease;
  z-index: 1000;
`

const NavLogo = styled.a`
  text-decoration: none;
  cursor: pointer;
  color: #003a5d;
  padding: 0 1.5rem;
  font-size: 2.5rem;
`

const NavBtn = styled.a`
  justify-content: center;
  align-items: center;
  width: auto;
  height: 50%;
  padding: 10px 50px;
  margin-right: 1.5rem;
  background: rgb(241, 226, 147);
  display: ${({ onScroll }) => (onScroll ? 'flex' : 'none')};
  border: none;
  border-radius: 5px;
  font-size: 14px;
  cursor: pointer;
  text-decoration: none;
  color: #003a5d;
`
