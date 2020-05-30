import React, { useState } from 'react'
import { Link, useStaticQuery, graphql } from 'gatsby'
import Image from 'gatsby-image'
import styled from 'styled-components'
import PropTypes from 'prop-types'

import { FaAlignRight } from 'react-icons/fa'
import Wrapper from './UI/Wrapper'

const Header = ({ className }) => {
  const [isOpen, setNav] = useState(false)
  const toggleNav = () => {
    setNav(Open => !Open)
  }
  const data = useStaticQuery(getLogo)
  const logo = data.file.childImageSharp.fluid
  return (
    <header className={className}>
      <Wrapper>
        <nav className="navbar">
          <Link to="/">
            <Image fluid={logo} className="logo" alt="logo" />
          </Link>
          <button type="button" className="toggleBtn" onClick={toggleNav}>
            <FaAlignRight className="toggleIcon" />
          </button>
          <ul className={isOpen ? `nav showNav` : `nav hideNav`}>
            <li>
              <Link className="navLink" to="/">
                home
              </Link>
            </li>
            <li>
              <Link className="navLink" to="/projects">
                projects
              </Link>
            </li>
            <li>
              <Link className="navLink" to="/contact">
                Contact me
              </Link>
            </li>
          </ul>
        </nav>
      </Wrapper>
    </header>
  )
}
Header.propTypes = {
  className: PropTypes.string,
}

export default styled(Header)`
  height: 65px;
  background-color: var(--secondaryDark);
  /* background: linear-gradient(135deg, rgba(255, 255, 255, 1) 0%, rgba(255, 153, 153, 1) 100%); */
  .navbar {
    width: 100%;
    height: 100%;
    .logo {
      display: none;
    }
    @media screen and (min-width: 576px) {
      background-color: transparent;
      display: flex;
      justify-content: space-between;
      .logo {
        display: block;
      }
    }
  }
  .gatsby-image-wrapper {
    width: 65px;
  }
  .toggleBtn {
    padding: 1rem 5px;
    background: transparent;
    border: none;
    outline: none;
    cursor: pointer;
  }
  .toggleIcon {
    color: var(--mainWhite);
    font-size: 1.5rem;
  }
  .hideNav {
    display: none;
    transition: var(--mainTransition);
  }
  .showNav {
    position: relative;
    height: auto;
    list-style: none;
    z-index: 999;
    background-color: var(--primaryDark);
  }
  .navLink {
    margin: 0;
    height: 100%;
    color: var(--mainWhite);
    display: block;
    padding: 1rem;
    &:hover {
      background-color: var(--secondaryColor);
      color: var(--primaryDark);
    }
  }
  li {
    margin-bottom: 0;
  }

  @media screen and (min-width: 576px) {
    .toggleBtn {
      display: none;
    }
    .hideNav {
      height: auto;
      list-style: none;
      display: flex;
      a {
        padding: 1rem 1.25rem;
      }
    }
  }
`
const getLogo = graphql`
  {
    file(relativePath: { regex: "/logo.png/" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
  }
`
