import React from 'react';
import {Container} from "../../../components/Container";
import {SectionTitle} from "../../../components/SectionTitle";
import {FlexWrapper} from "../../../components/FlexWrapper";
import styled from "styled-components";
import {myTheme} from "../../../styles/Theme.styled";
import {Icon} from "../../../components/icon/Icon";


export const Contacts = () => {
    return (
        <ContactsSection>
            <Container>
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
        </ContactsSection>
    );
};

const ContactsSection = styled.section`
    padding-bottom: 145px;
    position: relative;

    &::after {
        content: url("https://raw.githubusercontent.com/KaminnikAndrey/Portoflio/1ca626a6970d22f807ddb943caf7b5287a825334/src/assets/images/Dots.svg");
        width: 105px;
        height: 105px;
        position: absolute;
        top: 100px;
        left: -41px;
        z-index: 1;
    }
`

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
    color: ${myTheme.colors.grey};
    transition: 0.2s;

    span {
        font-weight: 400;
        color: ${myTheme.colors.grey};
        font-size: 16px;
        transition: 0.2s;

    }

    &:hover {
        color: ${myTheme.colors.white};

        span {
            color: ${myTheme.colors.white};
        }
    }
`