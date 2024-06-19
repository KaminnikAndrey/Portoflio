import React from 'react';
import {Container} from "../../../components/container";
import {FlexWrapper} from "../../../components/FlexWrapper";
import {Btn} from "../../../components/button/Btn";
import {SectionTitle} from "../../../components/SectionTitle";
import {Item} from "./projectItem/Item";
import img1 from '../../../assets/images/chertNodes.jpg'
import img2 from '../../../assets/images/protectX.jpg'
import img3 from '../../../assets/images/kahoot.jpg'


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
    return (
        <Container paddingBottom={'105px'}>
            <FlexWrapper justify={'space-between'}>
                <SectionTitle text={'projects'}/>
                <Btn text={'View all ~~>'} border={'none'}/>
            </FlexWrapper>
            <FlexWrapper margin={'50px 0 0 0 '} gap={'15px'}>
                {projectsList.map((project: projectsListType) => {
                    return <Item src={project.src}
                                 title={project.title}
                                 name={project.name}
                                 text={project.text}
                                 btn={project.btn}
                    />
                })}
            </FlexWrapper>
        </Container>
    );
};