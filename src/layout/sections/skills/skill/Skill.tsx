import React from 'react';
import {FlexWrapper} from "../../../../components/FlexWrapper";
import styled from "styled-components";
import {myTheme} from "../../../../styles/Theme.styled";

type SkillPropsType = {
    title: string
    text: Array<string>
}

export const Skill = (props: SkillPropsType) => {
    const {title, text} = props

    return (
        <FlexWrapper direction={'column'}>
            <Title>{title}</Title>
            <FlexWrapper direction={'column'} border={`1px solid ${myTheme.colors.grey}`} gap={'8px'} padding={'8px'}>
                {text.map((skill: string) => {
                    return <Text>{skill}</Text>
                })}
            </FlexWrapper>
        </FlexWrapper>
    );
};

const Title = styled.span`
    font-weight: 600;
    font-size: 16px;
    color: ${myTheme.colors.white};
    padding: 8px;
    border: 1px solid ${myTheme.colors.grey};
`

const Text = styled.p`
    font-size: 16px;
    color: ${myTheme.colors.grey};
    width: fit-content;
`