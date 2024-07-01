import styled from "styled-components";
import {myTheme} from "../../../styles/Theme.styled";

const ImageWrapper = styled.div`
    position: relative;

    span {
        width: 270px;
        height: 1px;
        background-color: ${myTheme.colors.purple};
        bottom: 3px;
        left: calc(50% + 10px);
        transform: translateX(-50%);
        position: absolute;
        display: block;
        
        
    }

    &::after {
        content: url("Dots.svg");
        width: 85px;
        height: 85px;
        position: absolute;
        display: block;
        top: 50px;
        left: 0;
    }

    &::before {
        content: url("dotsRectangle.svg");
        width: 105px;
        height: 55px;
        object-fit: contain;
        position: absolute;
        display: block;
        bottom: 185px;
        right: 15px;

        @media ${myTheme.media.xs}{
            right: 25px;
            bottom: 150px;
        }
    }

    @media ${myTheme.media.md} {
        width: fit-content;
        margin: 0 auto;
        span {
            bottom: 0;
        }
    }

`

const AboutMe = styled.section`
    padding-bottom: 110px;
    position: relative;

    &::after {
        content: url("Dots.svg");
        width: 65px;
        height: 105px;
        position: absolute;
        display: block;
        top: 50%;
        right: 0;

        @media ${myTheme.media.xl} {
            display: none;
        }
    }

    &::before {
        content: url("projectsBg.svg");
        width: 155px;
        transform: rotate(180deg);
        height: 155px;
        position: absolute;
        display: block;
        top: 200px;
        left: -90px;

        @media ${myTheme.media.xl} {
            display: none;
        }
    }

    @media ${myTheme.media.md} {
        padding-bottom: 70px;
    }
`

const Image = styled.img`
    height: 505px;
    width: 340px;
    object-fit: contain;

    @media ${myTheme.media.xs}{
        width: 320px;
        height: 440px;
    }
`

const Text = styled.p`
    color: ${myTheme.colors.grey};
    padding: 25px 0;
    font-size: 16px;
    line-height: 1.65;
    font-weight: 400;
    
    @media ${myTheme.media.xs} {
        padding: 10px 0;
    }
`

export const S = {
    ImageWrapper,
    AboutMe,
    Image,
    Text
}