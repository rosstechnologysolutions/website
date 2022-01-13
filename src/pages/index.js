import * as React from "react"
import styled from 'styled-components'
import Logo from '../assets/rtsLogo.svg'

const SiteContainer = styled.div`
  display: block;
  margin: auto;
  width: 50%;
`
// markup
const IndexPage = () => {
  return (
  <SiteContainer>
    <Logo />
  </SiteContainer>
  )
}

export default IndexPage
