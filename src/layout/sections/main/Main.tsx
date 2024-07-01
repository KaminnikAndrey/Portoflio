import React from 'react';
import photo from '../../../assets/images/photoTop.png'
import {FlexWrapper} from "../../../components/FlexWrapper";
import {Container} from "../../../components/Container";
import {Btn} from "../../../components/button/Btn";
import {S} from "./Main_Styles"

export const Main: React.FC = () => {
    return (
        <S.Main>
            <Container minHeight={'420px'}>
                <FlexWrapper justify={'space-between'} align={'center'} gap={'15px'} isAdaptiveColumnMD={true}>
                    <FlexWrapper direction={'column'} isAdaptiveWidthFitContentMD={true}>
                        <S.Title>
                            <span>Elias is a</span> web designer <span>and</span> front-end developer
                        </S.Title>
                        <S.Text>
                            He crafts responsive websites where technologies meet creativity
                        </S.Text>
                        <Btn text={'Contact me!!'} isAdaptiveAbsence={true}/>
                    </FlexWrapper>
                    <div>
                        <S.PhotoWrapper>
                            <S.Photo src={photo}/>
                        </S.PhotoWrapper>
                        <S.TextBold>
                            Currently working on <strong>Portfolio</strong>
                        </S.TextBold>
                    </div>
                </FlexWrapper>
            </Container>
        </S.Main>
    );
};

