import React from 'react';
import {Container} from "../../../components/Container";
import {SectionTitle} from "../../../components/SectionTitle";
import {FlexWrapper} from "../../../components/FlexWrapper";
import styled from "styled-components";
import {myTheme} from "../../../styles/Theme.styled";
import {Icon} from "../../../components/icon/Icon";
import {Section} from "../../../components/section/Section";


export const Contacts = () => {
    return (
        <Section>
            <Icon iconId={'dots'} width={'105px'} height={'105px'} position={'absolute'} top={'100px'} left={'-41px'}/>
            <Container paddingBottom={'145px'}>
                <SectionTitle text={'contacts'} lineWidth={'190px'}/>
                <FlexWrapper justify={'space-between'} margin={'45px 0 0 0'}>
                    <Text>I’m interested in freelance opportunities. However, if you have other request or question,
                        don’t
                        hesitate to contact me</Text>
                    <FlexWrapper padding={'16px'} direction={'column'} border={`1px solid ${myTheme.colors.grey}`}>
                        <Title>Message me here</Title>
                        <FlexWrapper direction={'column'} gap={'8px'}>
                            <Link href={'#'}>
                                <Icon iconId={'discord'} width={'32px'} height={'32px'}/>
                                <span>!Elias#3519</span>
                            </Link>
                            <Link href={'#'}>
                                <Icon iconId={'email'} width={'32px'} height={'32px'}/>
                                <span>elias@elias.me</span>
                            </Link>
                        </FlexWrapper>
                    </FlexWrapper>
                </FlexWrapper>
            </Container>
        </Section>
    );
};

const Text = styled.text`
    font-weight: 500;
    color: ${myTheme.colors.grey};
    max-width: 505px;
    font-size: 16px;
`

const Title = styled.span`
    font-size: 16px;
    font-weight: 600;
    color: ${myTheme.colors.white};
    margin-bottom: 15px;
`

const Link = styled.a`
    display: flex;
    align-items: center;
    gap: 5px;
    transition: 0.2s;
    color: ${myTheme.colors.grey};

    span {
        font-weight: 400;
        transition: 0.2s;
        color: ${myTheme.colors.grey};
        font-size: 16px;
    }
    
    &:hover span{
        color: ${myTheme.colors.white};
    }

    &:hover {
        color: ${myTheme.colors.white};
    }
`