import React from 'react';
import styled from "styled-components";
import {Logo} from "../../components/logo/Logo";
import {Menu} from "../../components/menu/Menu";
import {Container} from "../../components/Container";
import {FlexWrapper} from "../../components/FlexWrapper";
import {myTheme} from "../../styles/Theme.styled";
import {MobileMenu} from "../../components/menu/MobileMenu";

export const Header = () => {
    return (
        <StyledHeader>
            <Container>

                <FlexWrapper justify={'space-between'}>
                    <Logo/>
                    <Menu/>
                    <MobileMenu/>
                </FlexWrapper>
            </Container>
        </StyledHeader>
    );
};

const StyledHeader = styled.header`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 100;
    background: ${myTheme.colors.dark};
    width: 100%;
    height: 80px;
    padding-top: 30px;
    
    @media ${myTheme.media.xs} {
        height: 80px;
        padding-top: 20px;
    }

`