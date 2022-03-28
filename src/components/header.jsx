import Footer from './footer';

export const Header = (props) => {
  return (
    <>
      <header id='header'>
        <div className="">
          <video id="background-video" src="/inc/background.mp4" autoPlay muted loop>
          </video>
          <div className="mainMenu">
            <div className="mainMenuItem">
              <a href="#">Studio</a>
            </div>
            <div className="mainMenuItem">
              <a href="/artysci">Artyści</a>
            </div>
            <div className="mainMenuItem">
              <a href="#">Barber Shop</a>
            </div>
            <div className="mainMenuItem">
              <a href="#">Kontakt</a>
            </div>
          </div>
        </div>
        <Footer />
      </header>
    </>
  )
}
