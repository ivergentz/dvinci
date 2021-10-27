import React from 'react'
import styled from 'styled-components'
import ContactSection from '../components/ContactSection'
import { body, email, subject } from '../components/email'
import { expectEntries } from '../components/ExpectSection/data'
import ExpectSection from '../components/ExpectSection/ExpectSection'
import { factEntries } from '../components/FactsSection/data'
import FactsSection from '../components/FactsSection/FactsSection'
import Footer from '../components/Footer'
import Header from '../components/Header'
import JobSection from '../components/JobSection'
import { matchEntries } from '../components/MatchSection/data'
import MatchSection from '../components/MatchSection/MatchSection'
import { supportEntries } from '../components/SupportSection/data'
import SupportSection from '../components/SupportSection/SupportSection'

const HomePage = () => {
  console.log(email)
  console.log(subject)
  console.log(body)

  return (
    <>
      <Header email={email} subject={subject} body={body} />
      <Container>
        <JobSection />
        <FactsSection entries={factEntries} />
        <ExpectSection entries={expectEntries} />
        <MatchSection entries={matchEntries} />
      </Container>
      <SupportSection entries={supportEntries} />
      <Container>
        <ContactSection email={email} subject={subject} body={body} />
      </Container>
      <Footer email={email} subject={subject} body={body} />
    </>
  )
}

export default HomePage

const Container = styled.div`
  margin: 0 auto;
  z-index: 1;
  height: auto;
  max-width: 1170px;
`
