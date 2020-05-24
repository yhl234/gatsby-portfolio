import React, { useState } from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'
import PropTypes from 'prop-types'

import { FaAlignRight } from 'react-icons/fa'
import Wrapper from './UI/Wrapper'

const Header = ({ className }) => {
  const [isOpen, setNav] = useState(false)
  const toggleNav = () => {
    setNav(Open => !Open)
  }
  return (
    <header className={className}>
      <Wrapper>
        <nav className="navbar">
          <img className="logo" src="https://ccc.com" alt="logo" />
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
              <Link className="navLink" to="/Projects">
                projects
              </Link>
            </li>
            <li>
              <Link className="navLink" to="/Contact">
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
  background-color: var(--primaryColor);
  /* background: linear-gradient(135deg, rgba(255, 255, 255, 1) 0%, rgba(255, 153, 153, 1) 100%); */
  .navbar {
    width: 100%;
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
  .toggleBtn {
    padding: 1rem 5px;
    background: transparent;
    border: none;
    outline: none;
    cursor: pointer;
  }
  .toggleIcon {
    font-size: 1.5rem;
  }
  .hideNav {
    display: none;
  }
  .showNav {
    position: relative;
    height: auto;
    list-style: none;
    z-index: 999;
    background-color: var(--primaryColor);
  }
  .navLink {
    color: var(--secondaryDark);
    display: block;
    padding: 1rem;
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
