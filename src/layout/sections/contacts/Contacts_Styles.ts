import styled from "styled-components";
import {myTheme} from "../../../styles/Theme.styled";

const Contacts = styled.section`
    padding-bottom: 145px;
    position: relative;

    &::after {
        content: url("Dots.svg");
        width: 105px;
        height: 105px;
        position: absolute;
        top: 100px;
        left: -41px;
        z-index: 1;
        
        @media ${myTheme.media.lg} {
            display: none;
        }
    }

    @media ${myTheme.media.md} {
        padding-bottom: 70px;
    }
`

const Text = styled.text`
    font-weight: 500;
    color: ${myTheme.colors.grey};
    max-width: 505px;
    font-size: 16px;
    
    @media ${myTheme.media.sm} {
        max-width: 100%;
    }
`

const Title = styled.span`
    font-size: 16px;
    font-weight: 600;
    color: ${myTheme.colors.white};
    margin-bottom: 15px;
`

const Link = styled.a`
    display: flex;
    align-items: center;
    gap: 5px;
    color: ${myTheme.colors.grey};
    transition: 0.2s;

    span {
        font-weight: 400;
        color: ${myTheme.colors.grey};
        font-size: 16px;
        transition: 0.2s;

    }

    &:hover {
        color: ${myTheme.colors.white};

        span {
            color: ${myTheme.colors.white};
        }
    }
`

export const S = {
    Contacts,
    Text,
    Title,
    Link
}