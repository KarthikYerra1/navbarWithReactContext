import {Link} from 'react-router-dom'

import ThemeContext from '../../context/ThemeContext'

import './index.css'

const Navbar = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme, toggleTheme} = value

      const onClickTheme = () => {
        toggleTheme()
      }

      const renderLightThemeNavbar = () => (
        <nav className="nav-container light-theme-nav-container">
          <Link to="/" className="nav-item-link">
            <img
              src="https://assets.ccbp.in/frontend/react-js/website-logo-light-theme-img.png"
              alt="website logo"
              className="logo-img"
            />
          </Link>
          <ul className="nav-items-container">
            <Link to="/" className="nav-item-link">
              <li className="list-item light-theme-nav-item">Home</li>
            </Link>
            <Link to="/about" className="nav-item-link">
              <li className="list-item light-theme-nav-item">About</li>
            </Link>
          </ul>
          <button
            type="button"
            data-testid="theme"
            className="theme-btn"
            onClick={onClickTheme}
          >
            <img
              src="https://assets.ccbp.in/frontend/react-js/dark-theme-img.png"
              alt="theme"
              className="theme-switcher"
            />
          </button>
        </nav>
      )

      const renderDarkThemeNavbar = () => (
        <nav className="nav-container dark-theme-nav-container">
          <Link to="/" className="home-link">
            <img
              src="https://assets.ccbp.in/frontend/react-js/website-logo-dark-theme-img.png"
              alt="website logo"
              className="logo-img"
            />
          </Link>
          <ul className="nav-items-container">
            <Link to="/" className="nav-item-link">
              <li className="list-item dark-theme-nav-item">Home</li>
            </Link>
            <Link to="/about" className="nav-item-link">
              <li className="list-item dark-theme-nav-item">About</li>
            </Link>
          </ul>
          <button type="button" className="theme-btn" onClick={onClickTheme}>
            <img
              src="https://assets.ccbp.in/frontend/react-js/light-theme-img.png"
              alt="theme switcher"
              className="theme-switcher"
            />
          </button>
        </nav>
      )
      return isDarkTheme ? renderDarkThemeNavbar() : renderLightThemeNavbar()
    }}
  </ThemeContext.Consumer>
)

export default Navbar
