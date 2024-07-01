import styled from "styled-components";
import {myTheme} from "../../../styles/Theme.styled";

const Projects = styled.section`
    padding-bottom: 105px;
    position: relative;
    
    &::after{
        content: url("projectsBg.svg");
        display: block;
        position: absolute;
        width: 155px;
        height: 155px;
        top: 270px;
        right: -80px;
        
        @media ${myTheme.media.lg} {
            display: none;
        }
    }

    @media ${myTheme.media.md} {
        padding-bottom: 70px;
    }
`

export const S = {
    Projects
}