import React from 'react';
import styled from "styled-components";
import {Logo} from "../../components/logo/Logo";
import {Menu} from "../../components/menu/Menu";
import {Container} from "../../components/Container";
import {FlexWrapper} from "../../components/FlexWrapper";
import {myTheme} from "../../styles/Theme.styled";

export const Header = () => {
    return (
        <StyledHeader>
            <Container paddingTop={'30px'}>
                <FlexWrapper justify={'space-between'}>
                    <Logo/>
                    <Menu/>
                </FlexWrapper>
            </Container>
        </StyledHeader>
    );
};

const StyledHeader = styled.header`
    //margin-top: 30px;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 100;
    background: ${myTheme.colors.dark};
    width: 100%;
    height: 80px;
`