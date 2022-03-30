import Footer from './footer';
import { Link } from 'react-router-dom'

export const Header = (props) => {
  return (
    <>
      <header id='header'>
        <div className="">
          <video id="background-video" src="/inc/background-video.mp4" poster="/inc/movie-background.jpg" autoPlay muted loop>
          </video>
          <div className="mainMenu">
            <div className="mainMenuItem">
              <Link to="/o-nas">STUDIO</Link>
            </div>
            <div className="mainMenuItem">
              <Link to="/artysci">ARTYŚCI</Link>
            </div>
            <div className="mainMenuItem">
              <Link to="/barber-shop">BARBERSHOP</Link>
            </div>
          </div>
        </div>
        <Footer />
      </header>
    </>
  )
}
