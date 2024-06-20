import './App.css';
import styled from 'styled-components';
import {Header} from "./layout/header/Header";
import {myTheme} from "./styles/Theme.styled";
import {Main} from "./layout/sections/main/Main";
import {Quote} from "./layout/sections/quote/Quote";
import {Projects} from "./layout/sections/projects/Projects";
import {Skills} from "./layout/sections/skills/Skills";
import {AboutMe} from "./layout/sections/aboutMe/AboutMe";
import {Contacts} from "./layout/sections/contacts/Contacts";
import {Footer} from "./layout/footer/footer";

function App() {
    return (
        <div className="App">
            <Header/>
            <Main/>
            <Quote/>
            <Projects/>
            <Skills/>
            <AboutMe/>
            <Contacts/>
            <Footer/>
        </div>
    );
}

export default App;
