import styled from "styled-components";
import {myTheme} from "../../styles/Theme.styled";

const Header = styled.header`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 100;
    background: ${myTheme.colors.dark};
    width: 100%;
    height: 80px;
    padding-top: 30px;

    @media ${myTheme.media.xs} {
        height: 80px;
        padding-top: 20px;
    }
`

const StyledMenu = styled.nav`
    ul {
        display: flex;
        gap: 32px;
    }

`

export const S = {
    Header,
    StyledMenu
}