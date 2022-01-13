import * as React from "react"
import styled from 'styled-components'
import Logo from '../assets/rtsLogo.svg'

const SiteContainer = styled.div`
  display: block;
  margin: auto;
  width: 50%;
`

const LogoContainer = styled.div`
  width: 100%
`

const TagLineContainer = styled.div`
  font-family: Lato;
  margin-top: 500;
`

const TagLine = styled.h1`
`

const ContactButton = styled.button`
  color: orange
`
// markup
const IndexPage = () => {
  return (
  <SiteContainer>
    <LogoContainer>
      <Logo />
    </LogoContainer>
    <TagLineContainer>
    <TagLine>
    Making the Cloud Easy
  </TagLine>
  </TagLineContainer>
  <ContactButton href="mailto:ryan@rosstechnologysolutions.com">Contact</ContactButton>
  </SiteContainer>

  )
}

export default IndexPage
