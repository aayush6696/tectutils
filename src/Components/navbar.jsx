import React from 'react'
import PropTypes from 'prop-types'

export default function Navbar({ title, link1, link2, mode, toggleMode }) {
  return (
    <div>
      <nav className={`navbar navbar-expand-lg navbar-${mode} bg-${mode}`}>
        <div className='container-fluid'>
          <a className='navbar-brand' href='/'>
            {title}
          </a>
          <button
            className='navbar-toggler'
            type='button'
            data-bs-toggle='collapse'
            data-bs-target='#navbarSupportedContent'
            aria-controls='navbarSupportedContent'
            aria-expanded='false'
            aria-label='Toggle navigation'
          >
            <span className='navbar-toggler-icon'></span>
          </button>
          <div className='collapse navbar-collapse' id='navbarSupportedContent'>
            <ul className='navbar-nav me-auto mb-2 mb-lg-0'>
              <li className='nav-item'>
                <a className='nav-link active' aria-current='page' href='/'>
                  {link1}
                </a>
              </li>
              <li className='nav-item'>
                <a className='nav-link' href='/'>
                  {link2}
                </a>
              </li>
            </ul>
            <div
              className={`form-check form-switch text-${
                mode === 'light' ? 'dark' : 'light'
              }`}
            >
              <input
                className='form-check-input'
                type='checkbox'
                role='switch'
                id='flexSwitchCheckDefault'
                onClick={toggleMode}
              />
              <label
                className='form-check-label'
                htmlFor='flexSwitchCheckDefault'
              >
                Enable Dark Mode
              </label>
            </div>
          </div>
        </div>
      </nav>
    </div>
  )
}

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  link1: PropTypes.string.isRequired,
  link2: PropTypes.string.isRequired,
}

Navbar.defaultProps = {
  title: 'TextUtilsDefault',
  link1: 'Forgot to add link 1',
  link2: 'About',
}
