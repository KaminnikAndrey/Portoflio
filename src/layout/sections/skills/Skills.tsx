import React from 'react';
import styled from "styled-components";
import {Container} from "../../../components/Container";
import {SectionTitle} from "../../../components/SectionTitle";
import {FlexWrapper} from "../../../components/FlexWrapper";
import img from "../../../assets/images/skillsImg.png"
import {Skill} from "./skill/Skill";
import {Section} from "../../../components/Section";

type SkillsPropsType = {
    title: string
    text: Array<string>
}[]

type SkillPropsType = {
    title: string
    text: Array<string>
}

const SkillsArray = [
    [{
        title: "Languages",
        text: ['TypeScript Lua', 'JavaScript']
    }],
    [{
        title: "Databases",
        text: ['SQLite PostgreSQL', 'Mongo']
    }, {
        title: "Other",
        text: ['HTML CSS EJS SCSS', 'REST Jinja']
    }],
    [{
        title: "Tools",
        text: ['VSCode Neovim Linux', 'Figma XFCE Arch', 'Git Font Awesome']
    }, {
        title: "Frameworks",
        text: ['React Vue', 'Disnake Discord.js', 'Flask Express.js']
    }]
]

const getSkillsLayout = (skillSection: SkillsPropsType) => {
    return <FlexWrapper direction={'column'} gap={'25px'}>
        {skillSection.map((skill: SkillPropsType) => {
            return <Skill title={skill.title} text={skill.text}/>
        })}
    </FlexWrapper>
}


export const Skills = () => {

    return (
        <Section paddingBottom={'110px'}>
            <Container>
                <SectionTitle text={'skills'} lineWidth={'240px'}/>
                <FlexWrapper justify={'space-between'} margin={'15px 0 0 0'}>
                    <StyledImax src={img}/>
                    <FlexWrapper gap={'15px'} margin={'45px 0 0 0'}>
                        {SkillsArray.map((skillSection: SkillsPropsType) => {
                            return getSkillsLayout(skillSection)
                        })}
                    </FlexWrapper>
                </FlexWrapper>
            </Container>
        </Section>
    )
        ;
};

const StyledImax = styled.img`
    object-fit: contain;
    width: 350px;
    height: 280px;
`


