import React from 'react';
import styled from "styled-components";
import photo from '../../../assets/images/photoTop.png'
import {FlexWrapper} from "../../../components/FlexWrapper";
import {Container} from "../../../components/Container";
import {myTheme} from "../../../styles/Theme.styled";
import {Btn} from "../../../components/button/Btn";

export const Main = () => {
    return (
        <MainSection>
            <Container minHeight={'420px'}>
                <FlexWrapper justify={'space-between'} align={'center'} gap={'15px'} isAdaptiveColumnMD={true}>
                    <FlexWrapper direction={'column'} isAdaptiveWidthFitContentMD={true}>
                        <Title>
                            <span>Elias is a</span> web designer <span>and</span> front-end developer
                        </Title>
                        <Text>
                            He crafts responsive websites where technologies meet creativity
                        </Text>
                        <Btn text={'Contact me!!'} isAdaptiveAbsence={true}/>
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
        </MainSection>
    );
};

const MainSection = styled.main`
    padding-top: 80px;
`

const PhotoWrapper = styled.div`
    position: relative;

    @media ${myTheme.media.sm} {
        width: fit-content;
    }

    &::before {
        content: url("mainIcon.svg");
        width: 160px;
        height: 160px;
        position: absolute;
        top: 80px;
        left: -5px;
        z-index: -1;

        @media ${myTheme.media.xs} {
            content: url("logoAdaptive.svg");
            width: 105px;
            height: 105px;
            bottom: 40px;
            top: 55px;
            left: -5px;
        }
    }

    &::after {
        content: url("Dots.svg");
        width: 85px;
        height: 85px;
        position: absolute;
        bottom: 55px;
        right: 15px;
        z-index: 1;

        
            content: url("dotsAdaptive.svg");
            width: 55px;
            height: 55px;
            right: 10px;
            bottom: 40px;
        }
    }
    
`

const Photo = styled.img`
    width: 460px;
    height: 385px;
    object-fit: cover;

    @media ${myTheme.media.xs} {
        width: 310px;
        height: 260px;
    }
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
    max-width: 460px;
    font-weight: 500;
    padding: 8px 8px 8px 34px;
    border: 1px solid ${myTheme.colors.grey};
    text-align: left;
    position: relative;
    width: 400px;

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

        @media ${myTheme.media.xs} {
            top: 21px;
        }
    }
    
    @media ${myTheme.media.xs} {
        width: 320px;
    }
`