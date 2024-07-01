import styled from "styled-components";
import {myTheme} from "../../../styles/Theme.styled";
import {font} from "../../../styles/Common";

const Quote = styled.section`
    padding-top: 110px;
    padding-bottom: 75px;
    position: relative;

    &::after {
        content: url("quoteBg.svg");
        display: block;
        position: absolute;
        width: 92px;
        height: 92px;
        top: calc(110px + 15px);
        right: -10px;

        @media ${myTheme.media.md} {
            display: none;
        }
    }

    @media ${myTheme.media.md} {
        padding-top: 75px;
        padding-bottom: 50px;
    }
`

const Q = styled.blockquote`
    padding: 32px;
    font-size: 24px;
    line-height: 1.3;
    font-weight: 500;
    color: ${myTheme.colors.white};
    border: 1px solid ${myTheme.colors.grey};
    position: relative;

    &:last-child {
        padding: 16px;
    }

    &::after {
        content: url("quotes.svg");
        display: block;
        position: absolute;
        width: 40px;
        height: 40px;
        top: -15px;
    }

    &::after {
        transform: translateX(-20px);
    }

    & + &::after {
        transform: translateX(0);
        right: 15px;
    }

    @media ${myTheme.media.md} {
        ${font({weight: 400, color: myTheme.colors.white, fMax: 24, fMin: 16})}
    }

    @media ${myTheme.media.sm} {
        padding: 20px;
    }
`

export const S = {
    Quote,
    Q
}