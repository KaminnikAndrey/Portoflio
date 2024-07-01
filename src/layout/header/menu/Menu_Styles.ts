import styled from "styled-components";
import {myTheme} from "../../../styles/Theme.styled";

const Link = styled.a`
    font-size: 16px;
    font-weight: 400;
    color: ${myTheme.colors.grey};
    text-align: center;
    transition: 0.3s;

    span {
        font-weight: 500;
        color: ${myTheme.colors.purple}
    }   

    &:hover {
        color: ${myTheme.colors.white}
    }
`

export const S = {
    Link
}