import Footer from './footer';

export const Header = (props) => {
  return (
    <>
      <header id='header'>
        <div className="">
          <video id="background-video" src="/inc/background-video.mp4" autoPlay muted loop>
          </video>
          <div className="mainMenu">
            <div className="mainMenuItem">
              <a href="/o-nas">Studio</a>
            </div>
            <div className="mainMenuItem">
              <a href="/artysci">Artyści</a>
            </div>
            <div className="mainMenuItem">
              <a href="#">Barber Shop</a>
            </div>
            <div className="mainMenuItem">
              <a href="/contact">Kontakt</a>
            </div>
          </div>
        </div>
        <Footer />
      </header>
    </>
  )
}
