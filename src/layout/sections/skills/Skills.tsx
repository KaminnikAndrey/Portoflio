import React from 'react';
import {Container} from "../../../components/Container";
import {SectionTitle} from "../../../components/SectionTitle";
import {FlexWrapper} from "../../../components/FlexWrapper";
import img from "../../../assets/images/skillsImg.png"
import {Skill} from "./skill/Skill";
import {S} from "./Skills_Styles"

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
    return <FlexWrapper direction={'column'} gap={'25px'} isAdaptiveWidthXS={'220px'}>
        {skillSection.map((skill: SkillPropsType) => {
            return <Skill title={skill.title} text={skill.text}/>
        })}
    </FlexWrapper>
}


export const Skills: React.FC = () => {
    const skills = SkillsArray.map((skillSection: SkillsPropsType) => {
        return getSkillsLayout(skillSection)
    })

    return (
        <S.Skills>
            <Container>
                <SectionTitle text={'skills'} lineWidth={'240px'}/>
                <FlexWrapper justify={'space-between'} margin={'15px 0 0 0'}>
                    <S.StyledImax src={img}/>
                    <FlexWrapper gap={'15px'} padding={'45px 0 0 0'} paddingMd={'20px 0 0 0'} isAdaptiveColumnXS={true} isAdaptiveWidthFitContentXS={true} margin={'0 auto'} >
                        {skills}
                    </FlexWrapper>
                </FlexWrapper>
            </Container>
        </S.Skills>
    )
        ;
};


