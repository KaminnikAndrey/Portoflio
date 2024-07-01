import React from 'react';
import styled from "styled-components";
import {myTheme} from "../../styles/Theme.styled";

type BtnPropsType = {
    text: string
    border?: 'none' | 'gray' | 'purple'
    isAdaptiveAbsence?: boolean
}

type LinkPropsType = {
    border?: 'none' | 'gray' | 'purple'
    isAdaptiveAbsence?: boolean
}

export const Btn:React.FC<BtnPropsType> = ({text, border = 'purple', isAdaptiveAbsence}: BtnPropsType) => {

    return (
        <Link href={'#'} border={border} isAdaptiveAbsence={isAdaptiveAbsence}>{text}</Link>
    );
};

const Link = styled.a<LinkPropsType>`
    font-size: 16px;
    font-weight: 500;
    color: ${props => props.border === 'gray' ? myTheme.colors.grey : myTheme.colors.white};
    padding: 8px 16px;
    border: 1px solid ${myTheme.colors.purple};
    border: ${props =>
            props.border === 'purple' ? `1px solid ${myTheme.colors.purple}` :
                    props.border === 'gray' ? `1px solid ${myTheme.colors.grey}` : 'none'};
    width: fit-content;
    transition: 0.2s;

    &:hover {
        background-color: ${props => props.border === 'purple' ? 'rgba(199, 120, 221, 0.2)' : props.border === 'gray' ? 'rgba(171, 178, 191, 0.2)' : 'none'}
    }

    &:hover {
        transform: ${props => props.border === 'none' ? 'translateY(-2px)' : 'none'};
    }

    @media ${myTheme.media.xs} {
        display: ${props => props.isAdaptiveAbsence ? 'none' : 'block'};
    }
`