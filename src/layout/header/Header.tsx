import React from 'react';
import {Logo} from "../../components/logo/Logo";
import {Menu} from "./menu/Menu";
import {Container} from "../../components/Container";
import {FlexWrapper} from "../../components/FlexWrapper";
import {MobileMenu} from "./mobileMenu/MobileMenu";
import {S} from './Header_Styles'

export const Header: React.FC = () => {
    const [width, setWidth] = React.useState(window.innerWidth)
    const breakpoint = 576

    React.useEffect(() => {
        const handleWindowResize = () => setWidth(window.innerWidth)
        window.addEventListener('resize', handleWindowResize)
        return () => window.removeEventListener('resize', handleWindowResize)
    }, [])

    return (
        <S.Header>
            <Container>
                <FlexWrapper justify={'space-between'}>
                    <Logo/>
                    {width < breakpoint ?
                        <S.StyledMenu>
                            <MobileMenu/>
                        </S.StyledMenu>
                        :
                        <S.StyledMenu>
                            <Menu/>
                        </S.StyledMenu>}
                </FlexWrapper>
            </Container>
        </S.Header>
    );
};