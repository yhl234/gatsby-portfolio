import React, { useState } from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { FaAlignRight } from 'react-icons/fa'

const Header = ({ className }) => {
  const [isOpen, setNav] = useState(false)
  const toggleNav = () => {
    setNav(Open => !Open)
  }
  return (
    <header className={className}>
      <nav className="navbar">
        {/* <img src={} alt="backroads logo" /> */}
        <button type="button" className="logoBtn" onClick={toggleNav}>
          <FaAlignRight className="logoIcon" />
        </button>
        <ul className={isOpen ? `showNav` : `hideNav`}>
          <li>
            <Link className="navLink" to="/">
              1
            </Link>
          </li>
          <li>
            <Link to="/">2</Link>
          </li>
          <li>
            <Link to="/">3</Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}
Header.propTypes = {
  className: PropTypes.string,
}

export default styled(Header)`
  background-color: #777;
  .logoBtn {
    background: transparent;
    border: none;
    outline: none;
    cursor: pointer;
  }
  .logoIcon {
    font-size: 1.5rem;
  }
  .hideNav {
    display: none;
  }
  .showNav {
    height: auto;
    list-style: none;
  }
  .navLink {
    color: white;
    display: block;
    padding: 1rem;
    text-decoration: none !important;
    text-transform: capitalize;
  }

  @media screen and (min-width: 576px) {
    .navbar {
      padding: 0 2rem;
    }
  }

  @media screen and (min-width: 992px) {
    .logoBtn {
      display: none;
    }
    .hideNav {
      height: auto;
      list-style: none;
      display: flex;
      a {
        padding: 1rem 1.25rem;
        text-decoration: none;
        text-transform: capitalize;
      }
    }
  }
`
