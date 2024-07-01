import React from 'react';
import {Container} from "../../../components/Container";
import {Menu} from "../menu/Menu";
import {S} from "./MobileMenu_Styles"

export const MobileMenu: React.FC = () => {
    return (
        <div>
            <S.BurgerButton isOpen={false}/>
            <S.MobileMenuPopup isOpen={false}>
                <Container>
                    <Menu/>
                </Container>
            </S.MobileMenuPopup>
        </div>
    );
};
