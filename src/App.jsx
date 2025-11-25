import { useState } from "react";
import About from "./components/About";
import Contact from "./components/Contact";
import CustomCursor from "./components/Cursor";
import Experience from "./components/Experience";
import Header from "./components/Header";
import HeroSections from "./components/HeroSections";
import Works from "./components/Works";
import SplashScreen from "./components/SplashScreen";


export default function App() {
  const [showSplash, setShowSplash] = useState(true);

  return (
    <>
      {showSplash ? (
        <SplashScreen onFinish={() => setShowSplash(false)} />
      ) : (
        <>
          <Header />
          <HeroSections />
          <CustomCursor />
          <About />
          <Experience />
          <Works />
          <Contact />
        </>
      )}
    </>
  );
}
