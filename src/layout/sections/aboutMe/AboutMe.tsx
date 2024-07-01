import React from 'react';
import {Container} from "../../../components/Container";
import {SectionTitle} from "../../../components/SectionTitle";
import {FlexWrapper} from "../../../components/FlexWrapper";
import img from '../../../assets/images/photoBot.png'
import {Btn} from "../../../components/button/Btn";
import {S} from "./AboutMe_Styles"

export const AboutMe: React.FC = () => {
    return (
        <S.AboutMe>
            <Container>
                <FlexWrapper justify={'space-between'} isAdaptiveColumnMD={true}>
                    <div>
                        <SectionTitle text={'about-me'} lineWidth={'326px'}/>
                        <FlexWrapper padding={'15px 0 0 0'} direction={'column'} maxWidth={'515px'} marginMD={'0 auto'}>
                            <S.Text>
                                Hello, i’m Elias!
                            </S.Text>
                            <S.Text>
                                I’m a self-taught front-end developer based in Russia, Yekaterinburg. I can develop responsive
                                websites from scratch and raise them into modern user-friendly web experiences.
                            </S.Text>
                            <S.Text>
                                Transforming my creativity and knowledge into a websites has been my passion for over a
                                year. I have been helping various clients to establish their presence online. I always
                                strive to learn about the newest technologies and frameworks.
                            </S.Text>
                            <Btn text={'Read more ->'}/>
                        </FlexWrapper>
                    </div>
                    <S.ImageWrapper>
                        <S.Image src={img}/>
                        <span></span>
                    </S.ImageWrapper>
                </FlexWrapper>
            </Container>
        </S.AboutMe>
    );
};
