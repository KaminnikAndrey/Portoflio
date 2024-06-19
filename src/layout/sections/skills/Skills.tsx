import React from 'react';
import styled from "styled-components";
import {Container} from "../../../components/container";
import {SectionTitle} from "../../../components/SectionTitle";
import {FlexWrapper} from "../../../components/FlexWrapper";
import img from "../../../assets/images/skillsImg.png"
import {Skill} from "./skill/Skill";

type SkillPropsType = {
    title: string
    text: Array<string>
}

const SkillsArray = [
    {
        title: "Languages",
        text: ['TypeScript Lua', 'JavaScript']
    },
    {
        title: "Databases",
        text: ['SQLite PostgreSQL', 'Mongo']
    },
    {
        title: "Other",
        text: ['HTML CSS EJS SCSS', 'REST Jinja']
    },
    {
        title: "Tools",
        text: ['VSCode Neovim Linux', 'Figma XFCE Arch', 'Git Font Awesome']
    },
    {
        title: "Frameworks",
        text: ['React Vue', 'Disnake Discord.js', 'Flask Express.js']
    }
]

export const Skills = () => {
    return (
        <Container paddingBottom={'110px'}>
            <SectionTitle text={'skills'}/>
            <FlexWrapper justify={'space-between'} margin={'15px 0 0 0'}>
                <StyledImax src={img}/>
                <FlexWrapper gap={'15px'} margin={'45px 0 0 0'}>
                    <FlexWrapper direction={'column'}>
                        <Skill title={SkillsArray[0].title} text={SkillsArray[0].text}/>
                    </FlexWrapper>
                    <FlexWrapper direction={'column'} gap={'25px'}>
                        <Skill title={SkillsArray[1].title} text={SkillsArray[1].text}/>
                        <Skill title={SkillsArray[2].title} text={SkillsArray[2].text}/>
                    </FlexWrapper>
                    <FlexWrapper direction={'column'} gap={'25px'}>
                        <Skill title={SkillsArray[3].title} text={SkillsArray[3].text}/>
                        <Skill title={SkillsArray[4].title} text={SkillsArray[4].text}/>
                    </FlexWrapper>
                    {/*{SkillsArray.map((obj: SkillPropsType) => {*/}
                    {/*    return <Skill title={obj.title} text={obj.text}/>*/}
                    {/*})}*/}
                </FlexWrapper>
            </FlexWrapper>
        </Container>
    );
};

const StyledImax = styled.img`
    object-fit: contain;
    width: 350px;
    height: 280px;
`


