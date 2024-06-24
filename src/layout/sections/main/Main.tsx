import React from 'react';
import styled from "styled-components";
import photo from '../../../assets/images/photoTop.png'
import {FlexWrapper} from "../../../components/FlexWrapper";
import {Container} from "../../../components/Container";
import {myTheme} from "../../../styles/Theme.styled";
import {Btn} from "../../../components/button/Btn";
import {Icon} from "../../../components/icon/Icon";
import {Section} from "../../../components/Section";

export const Main = () => {
    return (
        <Section paddingTop={'80px'}>
            <Container minHeight={'420px'}>
                <FlexWrapper justify={'space-between'} align={'center'}>
                    <FlexWrapper direction={'column'}>
                        <Title>
                            <span>Elias is a</span> web designer <span>and</span> front-end developer
                        </Title>
                        <Text>
                            He crafts responsive websites where technologies meet creativity
                        </Text>
                        <Btn text={'Contact me!!'}/>
                    </FlexWrapper>
                    <div>
                        <PhotoWrapper>
                            <Photo src={photo}/>

                        </PhotoWrapper>
                        <TextBold>
                            Currently working on <strong>Portfolio</strong>
                        </TextBold>
                    </div>
                </FlexWrapper>
            </Container>
        </Section>

    );
};

const PhotoWrapper = styled.div`
    position: relative;
    
    &::before {
        content: url("https://raw.githubusercontent.com/KaminnikAndrey/Portoflio/main/src/assets/images/mainIcon.svg");
        position: absolute;
        display: block;
        width: 160px;
        height: 160px;
        left: -5px;
        top: 80px;
        z-index: -1;
    }

    &::after {
        content: url("https://raw.githubusercontent.com/KaminnikAndrey/Portoflio/main/src/assets/images/Dots.svg");
        position: absolute;
        display: block;
        width: 85px;
        height: 85px;
        right: 15px;
        bottom: 55px;
        z-index: 1;
    }
`

const Photo = styled.img`
    width: 460px;
    height: 385px;
    object-fit: cover;
`

const Title = styled.h1`
    font-size: 32px;
    font-weight: 600;
    text-align: left;
    max-width: 540px;
    color: ${myTheme.colors.purple};
    margin-bottom: 30px;

    span {
        color: ${myTheme.colors.white};
    }
`

const Text = styled.p`
    font-size: 16px;
    line-height: 1.55;
    color: ${myTheme.colors.grey};
    margin-bottom: 25px;
    text-align: left;
    max-width: 480px;
    font-weight: 400;
`

const TextBold = styled.p`
    font-size: 16px;
    line-height: 1.55;
    color: ${myTheme.colors.grey};
    margin-bottom: 25px;
    max-width: 460px;
    font-weight: 500;
    padding: 8px 80px 8px 34px;
    border: 1px solid ${myTheme.colors.grey};
    text-align: left;
    position: relative;

    strong {
        font-weight: 600;
        color: ${myTheme.colors.white};
    }

    &::before {
        content: '';
        position: absolute;
        width: 16px;
        height: 16px;
        display: block;
        background-color: ${myTheme.colors.purple};
        top: 11px;
        left: 10px;
    }
`