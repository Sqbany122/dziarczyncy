import Footer from './footer';

export const Header = (props) => {
  return (
    <>
      <header id='header'>
        <div className="">
          <video id="background-video" src="/inc/background-video.mp4" poster="/inc/movie-background.png" autoPlay muted loop>
          </video>
          <div className="mainMenu">
            <div className="mainMenuItem">
              <a href="/o-nas">STUDIO</a>
            </div>
            <div className="mainMenuItem">
              <a href="/artysci">ARTYŚCI</a>
            </div>
            <div className="mainMenuItem">
              <a href="/barber-shop">BARBERSHOP</a>
            </div>
          </div>
        </div>
        <Footer />
      </header>
    </>
  )
}
