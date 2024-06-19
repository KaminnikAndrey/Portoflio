import React from 'react';
import styled from "styled-components";
import {myTheme} from "../../styles/Theme.styled";

type BtnPropsType = {
    text: string
    border?: 'none' | 'gray' | 'purple'
}

type LinkPropsType = {
    border?: 'none' | 'gray' | 'purple'
}

export const Btn = ({text, border = 'purple'}: BtnPropsType) => {

    return (
        <Link href={'#'} border={border}>${text}</Link>
    );
};

const Link = styled.a<LinkPropsType>`
    font-size: 16px;
    font-weight: 500;
    color: ${props => props.border === 'gray' ? myTheme.colors.grey :myTheme.colors.white};
    padding: 8px 16px;
    border: 1px solid ${myTheme.colors.purple};
    border: ${props =>
            props.border === 'purple' ? `1px solid ${myTheme.colors.purple}` :
                    props.border === 'gray' ? `1px solid ${myTheme.colors.grey}` : 'none'};
    width: fit-content;
`