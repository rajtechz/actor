import { MantineProvider } from '@mantine/core';
import './App.css';
import Bio from './component/Bio';
// import { useEffect } from 'react';
import VideoPlayer from './component/VideoPlayer';
import Gallery from './component/Gallery';
import Contact from './component/Contact';
import ScrollButton from './component/ScrollTop';

function App() {
  // useEffect(() => {
  //   document.body.style.overflow = 'hidden';
  //   return () => {
  //     document.body.style.overflow = 'auto';
  //   };
  // }, []);
  return (
    <>
      <MantineProvider
        theme={{
          colors: { primary: ["#015761", "#f7dc4f", "#fff"] }
        }}


      >

        <Bio />
        <VideoPlayer />
        <Gallery />
        <Contact />
        <ScrollButton />
      </MantineProvider>

    </>
  );
}

export default App;
