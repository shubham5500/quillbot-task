import React from "react";
import './App.scss';
import Header from "./components/Header/Header";
import SectionOne from "./components/Sections/SectionOne/SectionOne";
import SectionTwo from "./components/Sections/SectionTwo/SectionTwo";
import SectionThree from "./components/Sections/SectionThree/SectionThree";

function App() {
  return (
    <div className="App">
      <Header/>
      <SectionOne/>
      <SectionTwo/>
      <SectionThree/>
    </div>
  );
}

export default App;
