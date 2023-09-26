import ThemeContext from '../../context/ThemeContext'

import Navbar from '../Navbar'

import './index.css'

const NotFound = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme} = value
      const backgroundColor = isDarkTheme ? 'dark-theme-bg' : 'light-theme-bg'
      return (
        <>
          <Navbar />
          <div className={`bg-container ${backgroundColor}`}>
            <img
              src="https://assets.ccbp.in/frontend/react-js/not-found-img.png"
              alt="not found"
              className="container-img"
            />
            <h1 className="container-text">Lost Your Way?</h1>
            <p className="container-description">
              We cannot seem to find the page your are looking for.
            </p>
          </div>
        </>
      )
    }}
  </ThemeContext.Consumer>
)

export default NotFound
