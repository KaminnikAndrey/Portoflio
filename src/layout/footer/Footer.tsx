import React from 'react';
import {Container} from "../../components/Container";
import {FlexWrapper} from "../../components/FlexWrapper";
import {Logo} from "../../components/logo/Logo";
import {Icon} from "../../components/icon/Icon";
import {S} from "./Footer_Styles"

const SocialLinkList: Array<string> = ['github', 'figma', 'discord']

export const Footer: React.FC = () => {
    return (
        <S.Footer>
            <Container>
                <FlexWrapper justify={'space-between'} isAdaptiveColumnXS={true}>
                    <div>
                        <FlexWrapper gap={'25px'} margin={'0 0 15px 0 '}>
                            <Logo/>
                            <S.Link href={'#'}>elias@elias-dev.ml</S.Link>
                        </FlexWrapper>
                        <S.Title>Web designer and front-end developer</S.Title>
                    </div>
                    <FlexWrapper direction={'column'} gap={'15px'} isAdaptiveWidthFitContentMD={true}
                                 isAdaptiveWidthFitContentXS={true} marginXs={'0 auto'}>
                        <S.BigTitle>
                            Media
                        </S.BigTitle>
                        <FlexWrapper gap={'8px'}>
                            {SocialLinkList.map((id: string) =>
                                <S.Link href="#">
                                    <Icon iconId={id} width={'32px'} height={'32px'}/>
                                </S.Link>
                            )}
                        </FlexWrapper>
                    </FlexWrapper>
                </FlexWrapper>
                <S.Text>© Copyright 2022. Made by Elias</S.Text>
            </Container>
        </S.Footer>
    );
};


