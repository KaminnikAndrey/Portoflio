import React from 'react';
import styled from "styled-components";
import photo from '../../../assets/images/photoTop.png'
import {FlexWrapper} from "../../../components/FlexWrapper";
import {Container} from "../../../components/container";
import {myTheme} from "../../../styles/Theme.styled";
import {Btn} from "../../../components/button/Btn";

export const Main = () => {
    return (
        <Container minHeight={'420px'} as={'section'}>
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
                    <Photo src={photo}/>
                    <TextBold>
                        Currently working on <strong>Portfolio</strong>
                    </TextBold>
                </div>
            </FlexWrapper>
        </Container>
    );
};

const Photo = styled.img`
    width: 460px;
    height: 385px;
    object-fit: cover;
`

const Title = styled.h1`
    font-size: 42px;
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
    max-width: 460px;
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
    
    strong{
        font-weight: 600;
        color: ${myTheme.colors.white};
    }
`