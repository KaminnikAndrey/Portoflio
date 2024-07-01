import styled from "styled-components";
import {myTheme} from "../../../styles/Theme.styled";


const Skills = styled.section`
    padding-bottom: 110px;
    
    @media ${myTheme.media.md} {
        padding-bottom: 70px;
    }
`


const StyledImax = styled.img`
    object-fit: contain;
    width: 350px;
    height: 280px;
    
    @media ${myTheme.media.md} {
        display: none;
    }
`

export const S = {
    Skills,
    StyledImax
}