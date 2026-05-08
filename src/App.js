import logo from './logo.svg';
import './App.css';
import Visualization from './3D_Components/Visualization';
import HoverInfo from './HoverInfo';
import React, { useEffect } from 'react';
import Overlay from './Overlay/Overlay';
import { Suspense, useRef, useState } from 'react';
import { applyProps } from 'react-three-fiber';
import './type.css'
import { AppContext } from './AppContext';
function TestComponent () {
  useEffect(()=>{
  })
  return <h1>TEST COMPONENT</h1>
}
function App() {
  const [counter, setCounter] = React.useState(0);
  const previousCounter = React.useRef(0);
  const animationTime = useRef(0);

  const [rotatePhoneContainer, setrotatePhoneContainer] = React.useState(false);


  const [info, setInfo] = useState(null);
  const [info_page, setInfoPage] = useState(null);
  const [playing, setPlaying] = useState(false);
  const [scrubbing, setScrubbing] = useState(false);
  const [hovered, setHovered] = useState([null]);
  const [yearPercentage, setYearPercentage] = useState(0);
  const [counterHit, setcounterHit] = useState(false);
  const [redrawState, setRedrawState] = useState(0);

  const [loaded3D, setLoaded3D] = useState(false);

  const handleResize = () => {
    setRedrawState(window.innerHeight)
    if (window.innerWidth < 500) {
      setrotatePhoneContainer(true);
    } else {
      setrotatePhoneContainer(false);
    }
  };
  const [openModal, setOpenModal] = React.useState(false)



  const left_click = () => {
    setCounter(counter => Math.max(counter - 1, 0));
    setPlaying(true);
    setScrubbing(false);
    setcounterHit(false);

  }

  const right_click = () => {
    setCounter(counter => Math.min(counter + 1, 34));
    setPlaying(true);
    setScrubbing(false);
    setcounterHit(false);
  }

  useEffect(() => {

    document.ontouchstart = function(e){ 
      e.preventDefault(); 
    }
  
    if (window.innerWidth < 500) {
      setrotatePhoneContainer(true);
    }
    const handleKeyDown = (e) => {
      if (e.key == "ArrowRight") {
        right_click()
      }

      if (e.key == "ArrowLeft") {
        left_click()
      }
    }
    window.addEventListener('resize', handleResize)

    const handleKeyUp = (e) => {
    }
    document.addEventListener('keydown', handleKeyDown)
    document.addEventListener('keyup', handleKeyUp)
    return () => {
      document.removeEventListener('keydown', handleKeyDown)
      document.removeEventListener('keyup', handleKeyUp)
    }

  }, [])



  return (

      <div className="App" onClick={() => { setrotatePhoneContainer(false); }}>
        <div className="game_container">
          <AppContext.Provider value = {{counter, setCounter, hovered, setHovered}}>
          <Suspense >
            <div className="vis-container">
              <Visualization
                animationTime={animationTime}
                hovered={hovered} setHovered={setHovered}
                setInfo={setInfo} setInfoPage={setInfoPage}
                counter={counter} setCounter={setCounter}
                previousCounter={previousCounter}
                scrubbing={scrubbing} setScrubbing={setScrubbing}
                setYearPercentage={setYearPercentage} yearPercentage={yearPercentage}
                setcounterHit={setcounterHit}
                counterHit={counterHit}
                setOpenModal={setOpenModal}
                setLoaded3D={setLoaded3D}
              />

            </div>
          </Suspense>

          <div className='game_overlay'>
            <Overlay
              counterHit={counterHit} setcounterHit={setcounterHit}
              setPlaying={setPlaying}
              setCounter={setCounter}
              animationTime={animationTime} 
              hovered = {hovered} setHovered={setHovered}
              counter={counter}
              info={info_page} setInfoPage={setInfoPage}
              yearPercentage={yearPercentage}
              setScrubbing={setScrubbing}
              openModal={openModal} setOpenModal={setOpenModal}
              rotatePhoneContainer={rotatePhoneContainer}
              redrawState={redrawState}
              left_click={left_click}
              right_click={right_click}
              loaded3D={loaded3D}
            />
            
          </div>
          </AppContext.Provider>
        </div>
      </div>

  );
}

export default App;