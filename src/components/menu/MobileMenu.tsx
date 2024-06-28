import React from 'react';
import styled, {css} from "styled-components";
import {myTheme} from "../../styles/Theme.styled";
import {Container} from "../Container";

export const MobileMenu = () => {
    return (
        <StyledMenu>
            <BurgerButton isOpen={false}/>
            <MobileMenuPopup isOpen={false}>
                <Container>
                    <ul>
                        <li>
                            <Link href={"#"}><span>#</span>home</Link>
                        </li>
                        <li>
                            <Link href={"#"}><span>#</span>works</Link>
                        </li>
                        <li>
                            <Link href={"#"}><span>#</span>about-me</Link>
                        </li>
                        <li>
                            <Link href={"#"}><span>#</span>contacts</Link>
                        </li>
                    </ul>
                </Container>
            </MobileMenuPopup>
        </StyledMenu>
    );
};

const MobileMenuPopup = styled.div<{ isOpen: boolean }>`
    position: fixed;
    background-color: ${myTheme.colors.dark};
    right: 0;
    left: 0;
    bottom: 0;
    height: calc(100vh - 80px);
    display: none;

    ul {
        display: flex;
        gap: 32px;
        flex-direction: column;
        padding-top: 50px;
    }

    ${props => props.isOpen && css<{isOpen: boolean }>`
        display: block
    `
    }
`

const BurgerButton = styled.button<{ isOpen: boolean }>`
    width: 25px;
    height: 25px;
    position: relative;
    display: none;


    &::after {
        content: '';
        width: 25px;
        height: 2px;
        background-color: ${myTheme.colors.grey};
        position: absolute;
        left: 0;
        top: 5px;
        transition: 0.2s;
    }

    &::before {
        content: '';
        width: 15px;
        height: 2px;
        background-color: ${myTheme.colors.grey};
        position: absolute;
        right: 0;
        top: 12px;
        transition: 0.2s;
    }

    ${props => props.isOpen && css<{ isOpen: boolean }>`
        &::after {
            transform: rotate(45deg);
            top: 12px;
        }

        &::before {
            transform: rotate(135deg);
            width: 25px;
            top: 12px;
        }
    `} @media ${myTheme.media.xs} {
    display: block;
}
`

const StyledMenu = styled.nav`
    ul {
        display: flex;
        gap: 32px;
    }
`
const Link = styled.a`
    font-size: 16px;
    font-weight: 400;
    color: ${myTheme.colors.grey};
    text-align: center;
    transition: 0.3s;

    span {
        font-weight: 500;
        color: ${myTheme.colors.purple}
    }

    &:hover {
        color: ${myTheme.colors.white}
    }
`