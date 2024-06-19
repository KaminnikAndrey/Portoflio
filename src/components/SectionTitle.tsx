import React from 'react';
import styled from "styled-components";
import {myTheme} from "../styles/Theme.styled";

type TitlePropsType = {
    text: string
}

export const SectionTitle = (props: TitlePropsType) => {
    return (
        <Title>
            <span>#</span>{props.text}
        </Title>
    );
};

const Title = styled.h2`
    font-size: 32px;
    font-weight: 500;
    text-align: left;
    color: ${myTheme.colors.white};

    span {
        color: ${myTheme.colors.purple};
    }

`