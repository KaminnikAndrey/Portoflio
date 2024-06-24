import React from 'react';
import {Container} from "../../../components/Container";
import {SectionTitle} from "../../../components/SectionTitle";
import {FlexWrapper} from "../../../components/FlexWrapper";
import styled from "styled-components";
import img from '../../../assets/images/photoBot.png'
import {myTheme} from "../../../styles/Theme.styled";
import {Btn} from "../../../components/button/Btn";
import {Section} from "../../../components/Section";
import {Icon} from "../../../components/icon/Icon";

export const AboutMe = () => {
    return (
        <AboutMeSection>
            <Container>
                <FlexWrapper justify={'space-between'}>
                    <div>
                        <SectionTitle text={'about-me'} lineWidth={'326px'}/>
                        <FlexWrapper margin={'25px 0 0 0'} direction={'column'} maxWidth={'515px'}>
                            <Text>
                                Hello, i’m Elias!
                            </Text>
                            <Text>
                                I’m a self-taught front-end developer based in Yekaterinburg, Russia. I can develop responsive
                                websites from scratch and raise them into modern user-friendly web experiences.
                            </Text>
                            <Text>
                                Transforming my creativity and knowledge into a websites has been my passion for over a
                                year. I have been helping various clients to establish their presence online. I always
                                strive to learn about the newest technologies and frameworks.
                            </Text>
                            <Btn text={'Read more ->'}/>
                        </FlexWrapper>
                    </div>
                    <ImageWrapper>
                        <Icon iconId={'dots'} width={'85px'} height={'85px'} position={'absolute'} top={'50px'} left={'0'}/>
                        <Icon iconId={'dots'} width={'105px'} height={'65px'} position={'absolute'} bottom={'175px'} right={'-5px'}/>
                        <Image src={img}/>
                    </ImageWrapper>
                </FlexWrapper>
            </Container>
        </AboutMeSection>
    );
};

const AboutMeSection = styled.section`
    position: relative;
    padding-bottom: 110px;

    &::before {
        content: url("https://raw.githubusercontent.com/KaminnikAndrey/Portoflio/main/src/assets/images/squareBg.svg");
        position: absolute;
        display: block;
        width: 155px;
        height: 155px;
        left: 0;
        top: 200px;
    }

    &::after {
        content: url("https://raw.githubusercontent.com/KaminnikAndrey/Portoflio/main/src/assets/images/Dots.svg");
        position: absolute;
        display: block;
        width: 65px;
        height: 105px;
        right: 0;
        top: 50%;
    }
`

const Image = styled.img`
    height: 505px;
    width: 340px;
    object-fit: contain;
`

const Text = styled.p`
    color: ${myTheme.colors.grey};
    margin: 25px 0;
    font-size: 16px;
    line-height: 1.65;
    font-weight: 400;
`

const ImageWrapper = styled.div`
    position: relative;

    &:after {
        content: '';
        position: absolute;
        bottom: 13px;
        left: calc(50% + 5px);
        transform: translateX(-50%);
        height: 1px;
        width: 270px;
        background-color: ${myTheme.colors.purple};
    }
`