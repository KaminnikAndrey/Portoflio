import React from 'react';
import {Container} from "../../../components/Container";
import {SectionTitle} from "../../../components/SectionTitle";
import {FlexWrapper} from "../../../components/FlexWrapper";
import {myTheme} from "../../../styles/Theme.styled";
import {Icon} from "../../../components/icon/Icon";
import {S} from "./Contacts_Styles"

export const Contacts: React.FC = () => {
    return (
        <S.Contacts>
            <Container>
                <SectionTitle text={'contacts'} lineWidth={'190px'}/>
                <FlexWrapper justify={'space-between'} padding={'45px 0 0 0'} isAdaptiveColumnSM={true} gap={'20px'} paddingSm={'25px 0 0 0'}>
                    <S.Text>I’m interested in freelance opportunities. However, if you have other request or question,
                        don’t
                        hesitate to contact me</S.Text>
                    <FlexWrapper padding={'16px'} direction={'column'} border={`1px solid ${myTheme.colors.grey}`} isAdaptiveWidthFitContentMD={true} isAdaptiveWidthFitContentXS={true} >
                        <S.Title>Message me here</S.Title>
                        <FlexWrapper direction={'column'} gap={'8px'}>
                            <S.Link href={'#'}>
                                <Icon iconId={'discord'} width={'32px'} height={'32px'}/>
                                <span>!Elias#3519</span>
                            </S.Link>
                            <S.Link href={'#'}>
                                <Icon iconId={'email'} width={'32px'} height={'32px'}/>
                                <span>elias@elias.me</span>
                            </S.Link>
                        </FlexWrapper>
                    </FlexWrapper>
                </FlexWrapper>
            </Container>
        </S.Contacts>
    );
};

