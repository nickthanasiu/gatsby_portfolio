/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from "react";
import PropTypes from "prop-types";
import { StaticQuery, graphql } from "gatsby";

import styled from 'styled-components';

const Container = styled.div`
  
  background-color: #f2f5f7;
  margin: 0 auto;
  max-width: 960px;
  height: 100vh;
  padding: 2rem 4rem;
  -webkit-transition: all .5s ease;
  -moz-transition: all .5s ease;
  transition: all .5s ease;
  //color: #fff;

  @media (max-width: 768px) {
    padding: 2rem 2.5rem;
  }
`

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <>
        <Container>
        <main>{children}</main>
          {/*<footer style={{
            position: 'absolute',
            bottom: '1rem'
          }}>
            © {new Date().getFullYear()}, Built with
            {` `}
            <a href="https://www.gatsbyjs.org">Gatsby</a>
          </footer>*/}
        </Container>
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
