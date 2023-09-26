import ThemeContext from '../../context/ThemeContext'

import Navbar from '../Navbar'

import './index.css'

const About = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme} = value
      const aboutImg = isDarkTheme
        ? 'https://assets.ccbp.in/frontend/react-js/about-dark-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/about-light-img.png'
      const backgroundColor = isDarkTheme ? 'dark-theme-bg' : 'light-theme-bg'

      return (
        <>
          <Navbar />
          <div className={`bg-container ${backgroundColor}`}>
            <img src={aboutImg} alt="about" className="container-img" />
            <h1 className="container-text">About</h1>
          </div>
        </>
      )
    }}
  </ThemeContext.Consumer>
)

export default About
