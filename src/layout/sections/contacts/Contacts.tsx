import React from 'react';
import {Container} from "../../../components/container";
import {SectionTitle} from "../../../components/SectionTitle";
import {FlexWrapper} from "../../../components/FlexWrapper";
import styled from "styled-components";
import {myTheme} from "../../../styles/Theme.styled";
import {Icon} from "../../../components/icon/Icon";



export const Contacts = () => {
    return (
        <Container as={'section'} paddingBottom={'145px'}>
            <SectionTitle text={'contacts'}/>
            <FlexWrapper justify={'space-between'} margin={'45px 0 0 0'}>
                <Text>I’m interested in freelance opportunities. However, if you have other request or question, don’t
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

    span {
        font-weight: 400;
        color: ${myTheme.colors.grey};
        font-size: 16px;
    }
`