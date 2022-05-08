import Footer from './footer';
import React, { Suspense, lazy } from 'react';
import ArtistsRow from './artistsRow';

const Artists = () => {

  const Artists = React.lazy(() => import('./artistsRow'));

  return (
    <>
      <div className="mainView">
        <div className="text col-md-6 col-sm-8 col-12">
          <h1>Artyści</h1>
          <p>W naszym zespole pracuje niezwykle utalentowana i pozytywna grupa artystów, swobodnie poruszająca się po zróżnicowanych formach <br />i kolorystyce. Każdy posiada swój unikalny styl i wyjątkowe umiejętności, które zaspokoją nawet najbardziej kreatywną i wymagającą wyobraźnię klienta.</p>
          <p>Nie nakładamy żadnych ograniczeń, co w efekcie daje bardzo szeroką paletę wykonywanych u nas tatuaży.</p>
          <p>Zapraszamy Cię serdecznie do zapoznania się z pracami naszych artystów - jesteśmy przekonani, że znajdziesz coś dla siebie.</p>
        </div>
      </div>
      <Suspense fallback={<div>Loading.....</div>}>
        <Artists />
      </Suspense>
      <Footer />
    </>
  )
}

export default Artists;
