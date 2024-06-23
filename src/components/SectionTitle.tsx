import React from 'react';
import styled from "styled-components";
import {myTheme} from "../styles/Theme.styled";

type TitlePropsType = {
    text: string
    lineWidth: string
}

type StyledTitlePropsType = {
    width: string
}


export const SectionTitle = (props: TitlePropsType) => {
    return (
        <Title width={props.lineWidth}>
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

    &::after{
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        background-color: ${myTheme.colors.purple};
        height: 1px;
        width: ${props => props.width};
        display: block;
        top: 20.5px;
        left: calc(100% + 15px);
    }
`