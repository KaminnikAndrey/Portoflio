import React from 'react';
import {FlexWrapper} from "../../../../components/FlexWrapper";
import {myTheme} from "../../../../styles/Theme.styled";
import {S} from "./Skill_Styles"

type SkillPropsType = {
    title: string
    text: Array<string>
}

export const Skill:React.FC<SkillPropsType> = (props: SkillPropsType) => {
    const {title, text} = props

    return (
        <FlexWrapper direction={'column'}>
            <S.Title>{title}</S.Title>
            <FlexWrapper direction={'column'} border={`1px solid ${myTheme.colors.grey}`} gap={'8px'} padding={'8px'}>
                {text.map((skill: string) => {
                    return <S.Text>{skill}</S.Text>
                })}
            </FlexWrapper>
        </FlexWrapper>
    );
};

