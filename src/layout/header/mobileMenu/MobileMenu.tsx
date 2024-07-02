import React, {useState} from 'react';
import {Container} from "../../../components/Container";
import {Menu} from "../menu/Menu";
import {S} from "./MobileMenu_Styles"

export const MobileMenu: React.FC = () => {
    const [menuIsOpen, setmenuIsOpen] = useState(false)
    const onBurgerBtnClick = () => {setmenuIsOpen(!menuIsOpen)}

    return (
        <div>
            <S.BurgerButton isOpen={menuIsOpen} onClick={onBurgerBtnClick} />
            <S.MobileMenuPopup isOpen={menuIsOpen} onClick={() => {setmenuIsOpen(false)}}>
                <Container>
                    <Menu/>
                </Container>
            </S.MobileMenuPopup>
        </div>
    );
};
