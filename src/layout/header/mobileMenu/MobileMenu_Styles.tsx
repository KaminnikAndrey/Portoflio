import styled, {css} from "styled-components";
import {myTheme} from "../../../styles/Theme.styled";

const MobileMenuPopup = styled.div<{ isOpen: boolean }>`
    position: fixed;
    background-color: ${myTheme.colors.dark};
    right: 0;
    left: 0;
    bottom: 0;
    height: calc(100vh - 50px);
    display: none;

    ul {
        display: flex;
        gap: 32px;
        flex-direction: column;
        padding-top: 50px;
        margin-left: auto;
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
    
    @media ${myTheme.media.xs} {
        display: block;
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
    `
}
`

export const S = {
    MobileMenuPopup,
    BurgerButton
}