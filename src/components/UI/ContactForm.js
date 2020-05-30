import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import Wrapper from './Wrapper'
import Title from './Title'

const ContactForm = ({ className }) => {
  return (
    <section className={className}>
      <Wrapper className="col" padding="20px">
        <Title title="contact" subtitle="me"></Title>
        <form action="https://formspree.io/mvobeogl" method="POST">
          <div className="name">
            <label htmlFor="name">
              <input type="text" name="name" id="name" placeholder="John Smith" required></input>
            </label>
          </div>
          <div className="email">
            <label htmlFor="email">
              <input type="email" name="email" id="email" placeholder="email@email.com" required></input>
            </label>
          </div>
          <div className="message">
            <label htmlFor="message">
              <textarea name="message" id="message" rows="10" placeholder="Hello there" required></textarea>
            </label>
          </div>
          <div>
            <input type="submit" value="submit"></input>
          </div>
        </form>
      </Wrapper>
    </section>
  )
}

ContactForm.propTypes = {
  className: PropTypes.string,
}

export default styled(ContactForm)`
  .col {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  form {
    margin: 0 auto;
    width: 500px;
    max-width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  input:not([type='submit']),
  textarea {
    display: block;
    width: 100%;
    margin: 10px 0;
    border: 0;
    border-bottom: 2px var(--primaryDark) solid;
  }
  input[type='submit'] {
    border-radius: 5px;
    width: 100%;
    text-transform: uppercase;
    background: transparent;

    border: 1px var(--secondaryDark) solid;
    color: var(--secondaryDark);

    &:hover {
      background: var(--secondaryDark);
      color: var(--offWhite);
    }
  }
`
