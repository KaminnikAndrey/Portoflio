import React from 'react';
import {Container} from "../../components/Container";
import {FlexWrapper} from "../../components/FlexWrapper";
import {Logo} from "../../components/logo/Logo";
import {myTheme} from "../../styles/Theme.styled";
import styled from "styled-components";
import {Icon} from "../../components/icon/Icon";

export const Footer = () => {
    return (
        <StyledFooter>
            <Container>
                <FlexWrapper justify={'space-between'} isAdaptiveColumnXS={true}>
                    <div>
                        <FlexWrapper gap={'25px'} margin={'0 0 15px 0 '}>
                            <Logo/>
                            <Link href={'#'}>elias@elias-dev.ml</Link>
                        </FlexWrapper>
                        <Title>Web designer and front-end developer</Title>
                    </div>
                    <FlexWrapper direction={'column'} gap={'15px'} isAdaptiveWidthFitContentMD={true} isAdaptiveWidthFitContentXS={true} marginXs={'0 auto'}>
                        <BigTitle>
                            Media
                        </BigTitle>
                        <FlexWrapper gap={'8px'}>
                            <Link href="#">
                                <Icon iconId={'github'} width={'32px'} height={'32px'}/>
                            </Link>
                            <Link href="#">
                                <Icon iconId={'figma'} width={'32px'} height={'32px'}/>
                            </Link>
                            <Link href="#">
                                <Icon iconId={'discord'} width={'32px'} height={'32px'}/>
                            </Link>
                        </FlexWrapper>
                    </FlexWrapper>
                </FlexWrapper>
                <Text>© Copyright 2022. Made by Elias</Text>
            </Container>
        </StyledFooter>
    );
};

const Link = styled.a`
    font-size: 16px;
    font-weight: 400;
    color: ${myTheme.colors.grey};
    transition: 0.2s;

    &:hover {
        color: ${myTheme.colors.white};
    }
`

const Title = styled.h3`
    font-size: 16px;
    font-weight: 400;
    color: ${myTheme.colors.white};
    @media ${myTheme.media.xs} {
        margin-bottom: 10px;
    }
`

const BigTitle = styled.span`
    font-size: 24px;
    font-weight: 500;
    color: ${myTheme.colors.white};
    
    @media ${myTheme.media.xs} {
        text-align: center;
    }
    
`

const Text = styled.p`
    font-size: 16px;
    font-weight: 400;
    color: ${myTheme.colors.grey};
    text-align: center;
`

const StyledFooter = styled.footer`
    border-top: 1px solid ${myTheme.colors.grey};
    padding: 30px 0;
    
    @media ${myTheme.media.xs} {
        padding: 20px 0;
    }
`

