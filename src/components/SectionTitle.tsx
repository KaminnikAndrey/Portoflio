import React from 'react';
import styled from "styled-components";
import {myTheme} from "../styles/Theme.styled";
import {font} from "../styles/Common";

type TitlePropsType = {
    text: string
    lineWidth: string
    isAdaptiveAbsenceLine?: boolean
}

type StyledTitlePropsType = {
    width: string
    isAdaptiveAbsenceLine?: boolean
}


export const SectionTitle = (props: TitlePropsType) => {
    return (
        <Title width={props.lineWidth} isAdaptiveAbsenceLine={props.isAdaptiveAbsenceLine}>
            <span>#</span>{props.text}
        </Title>
    );
};

const Title = styled.h2<StyledTitlePropsType>`
    font-size: 32px;
    font-weight: 500;
    text-align: left;
    color: ${myTheme.colors.white};
    position: relative;
    width: fit-content;

    span {
        color: ${myTheme.colors.purple};
    }

    &::after {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        background-color: ${myTheme.colors.purple};
        height: 1px;
        width: ${props => props.width};
        display: block;
        top: 50%;
        left: calc(100% + 15px);

        @media ${myTheme.media.md} {
            display: ${props => props.isAdaptiveAbsenceLine ? 'none' : 'block'};
        }

        @media ${myTheme.media.xs} {
            width: 150px;
        }
    }

    @media ${myTheme.media.md} {
        ${font({weight: 500, color: myTheme.colors.white, fMax: 32, fMin: 24})};
    }
`