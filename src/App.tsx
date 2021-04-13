import React from 'react';
import './App.css';
import Contacts from './contacts/Contacts';
import FooterBlock from './FooterBlock/FooterBlock';
import Header from './header/Header';
import Main from './main/Main';
import Skills from './skills/Skills';
import WorkFromHome from './workFromHome/WorkFromHome';
import Works from './works/Works';

function App() {
  return (
    <div className="App">
      <Header />
      <Main />
      <Skills />
      <Works />
      <WorkFromHome />
      <Contacts />
      <FooterBlock />
    </div>
  );
}

export default App;
