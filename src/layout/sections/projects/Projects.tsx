import React from 'react';
import {Container} from "../../../components/Container";
import {FlexWrapper} from "../../../components/FlexWrapper";
import {Btn} from "../../../components/button/Btn";
import {SectionTitle} from "../../../components/SectionTitle";
import {Item} from "./projectItem/Item";
import img1 from '../../../assets/images/chertNodes.jpg'
import img2 from '../../../assets/images/protectX.jpg'
import img3 from '../../../assets/images/kahoot.jpg'
import styled from "styled-components";
import {myTheme} from "../../../styles/Theme.styled";


type projectsListType = {
    src: string,
    title: string,
    name: string,
    text: string,
    btn: number
}

const projectsList: Array<projectsListType> = [{
    src: img1,
    title: 'HTML SCSS PYTHON Flask',
    name: 'ChertNodes',
    text: 'Minecraft servers hosting',
    btn: 2
}, {
    src: img2,
    title: 'React Express Discord.js Node.js HTML SCSS PYTHON Flask',
    name: 'ProtectX',
    text: 'Discord anti-crash bot',
    btn: 1
}, {
    src: img3,
    title: 'CSS Express Node.js',
    name: 'Kahoot Answers Viewer',
    text: 'Get answers to your kahoot quiz',
    btn: 1
}]

export const Projects = () => {
    const project = projectsList.map(({src, text, btn, title, name}: projectsListType) =>
        <Item src={src}
              title={title}
              name={name}
              text={text}
              btn={btn}/>
    )

    return (
        <ProjectsSection>
            <Container>
                <FlexWrapper justify={'space-between'}>
                    <SectionTitle text={'projects'} lineWidth={'510px'} isAdaptiveAbsenceLine={true}/>
                    <Btn text={'View all ~~>'} border={'none'}/>
                </FlexWrapper>
                <FlexWrapper padding={'50px 0 0 0 '} gap={'15px'} as={'ul'} isAdaptiveColumnSM={true} paddingSm={'30px 0 0 0'}>{project}</FlexWrapper>
            </Container>
        </ProjectsSection>
    );
};

const ProjectsSection = styled.section`
    padding-bottom: 105px;
    position: relative;
    
    &::after{
        content: url("projectsBg.svg");
        display: block;
        position: absolute;
        width: 155px;
        height: 155px;
        top: 270px;
        right: -80px;
        
        @media ${myTheme.media.lg} {
            display: none;
        }
    }

    @media ${myTheme.media.md} {
        padding-bottom: 70px;
    }
`