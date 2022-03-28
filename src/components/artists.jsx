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
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
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
