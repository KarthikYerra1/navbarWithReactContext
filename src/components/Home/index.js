import ThemeContext from '../../context/ThemeContext'

import Navbar from '../Navbar'

import './index.css'

const Home = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme} = value
      const homeImg = isDarkTheme
        ? 'https://assets.ccbp.in/frontend/react-js/home-dark-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/home-light-img.png'
      const backgroundColor = isDarkTheme ? 'dark-theme-bg' : 'light-theme-bg'

      return (
        <>
          <Navbar />
          <div className={`bg-container ${backgroundColor}`}>
            <img src={homeImg} alt="home" className="container-img" />
            <h1 className="container-text">Home</h1>
          </div>
        </>
      )
    }}
  </ThemeContext.Consumer>
)

export default Home
