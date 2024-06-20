import React from 'react';
import {Container} from "../../components/container";
import {FlexWrapper} from "../../components/FlexWrapper";
import {Logo} from "../../components/logo/Logo";
import {myTheme} from "../../styles/Theme.styled";
import styled from "styled-components";
import {Icon} from "../../components/icon/Icon";

export const Footer = () => {
    return (
        <Container as={'footer'} paddingTop={'30px'} paddingBottom={'30px'}>
            <FlexWrapper justify={'space-between'}>
                <div>
                    <FlexWrapper gap={'25px'} margin={'0 0 15px 0 '}>
                        <Logo/>
                        <Link href={'#'}>elias@elias-dev.ml</Link>
                    </FlexWrapper>
                    <Title>Web designer and front-end developer</Title>
                </div>
                <FlexWrapper direction={'column'} gap={'15px'}>
                    <BigTitle>
                        Media
                    </BigTitle>
                    <FlexWrapper gap={'8px'}>
                        <a href="#">
                            <Icon iconId={'github'} width={'32px'} height={'32px'}/>
                        </a>
                        <a href="#">
                            <Icon iconId={'figma'} width={'32px'} height={'32px'}/>
                        </a>
                        <a href="#">
                            <Icon iconId={'discord'} width={'32px'} height={'32px'}/>
                        </a>
                    </FlexWrapper>
                </FlexWrapper>
            </FlexWrapper>
            <Text>© Copyright 2022. Made by Elias</Text>
        </Container>
    );
};

const Link = styled.a`
    font-size: 16px;
    font-weight: 400;
    color: ${myTheme.colors.grey};
`

const Title = styled.h3`
    font-size: 16px;
    font-weight: 400;
    color: ${myTheme.colors.white};
    margin-top: 15px;
`

const BigTitle = styled.span`
    font-size: 24px;
    font-weight: 500;
    color: ${myTheme.colors.white};
`

const Text = styled.p`
    font-size: 16px;
    font-weight: 400;
    color: ${myTheme.colors.grey};
    text-align: center;
`


