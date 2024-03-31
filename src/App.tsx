import React from 'react';
import './App.css';
import Header from "./components/header/Header";
import SideBar from "./components/technologies/SideBar";
import Content from "./components/footer/Content";
import styled from "styled-components";

function App() {
  return (
    <SocialNetwork className="App">
        <Header />
        <SideBar />
        <Content />
    </SocialNetwork>
  );
}

export default App;


const SocialNetwork = styled.div`
    display: grid;
    
    grid-template-areas: 
        'h h'
        'n c';
    
    grid-template-rows: 60px 1fr;
    grid-template-columns: 2fr 10fr;
    grid-gap: 10px;
    
    max-width: 1200px;
    margin: 0 auto;
`