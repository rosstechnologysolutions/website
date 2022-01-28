import * as React from "react"
import { ThemeProvider } from 'styled-components';
import GlobalStyles from '../GlobalStyles';
import { Container } from '../components/Container';
import Header from '../components/Header';
// import Footer from '../components/Footer';
import PropTypes from "prop-types";
import Helmet from 'react-helmet';

const theme = {
  colors: {
    header: '#0070f3',
    secondary: "gray",
    body: '#fff',
    footer: '#003333',
  },
  mobile: '1100px',
}

// markup
const Layout = ({ children }) => {
    return (
      <ThemeProvider theme = {theme}>
        <>
        <GlobalStyles />
        <Header />
        <Container>
            <Helmet>
              <meta name="format-detection" content="telephone=no"></meta>
            </Helmet>
            <main>{ children }</main>
          {/* <Footer /> */}
        </Container>
  
        </>
      </ThemeProvider>
    )
  }
  
Layout.propTypes = {
  children: PropTypes.node.isRequired,
}
  
  export default Layout