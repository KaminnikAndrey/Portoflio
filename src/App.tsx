import './App.css';
import styled from 'styled-components';
import {Header} from "./layout/header/Header";
import {myTheme} from "./styles/Theme.styled";
import {Main} from "./layout/sections/main/Main";
import {Quote} from "./layout/sections/quote/Quote";

function App() {
    return (
        <div className="App">
            <Header/>
            <Main/>
            <Quote/>
        </div>
    );
}

export default App;
