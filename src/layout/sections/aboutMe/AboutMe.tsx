import React from 'react';
import {Container} from "../../../components/Container";
import {SectionTitle} from "../../../components/SectionTitle";
import {FlexWrapper} from "../../../components/FlexWrapper";
import styled from "styled-components";
import img from '../../../assets/images/photoBot.png'
import {myTheme} from "../../../styles/Theme.styled";
import {Btn} from "../../../components/button/Btn";

export const AboutMe = () => {
    return (
        <Container as={'section'}   paddingBottom={'110px'}>
            <FlexWrapper justify={'space-between'}>
                <div>
                    <SectionTitle text={'about-me'} lineWidth={'326px'}/>
                    <FlexWrapper margin={'25px 0 0 0'} direction={'column'} maxWidth={'515px'}>
                        <Text>
                            Hello, i’m Elias!
                        </Text>
                        <Text>
                            I’m a self-taught front-end developer based in Kyiv, Ukraine. I can develop responsive
                            websites from scratch and raise them into modern user-friendly web experiences.
                        </Text>
                        <Text>
                            Transforming my creativity and knowledge into a websites has been my passion for over a
                            year. I have been helping various clients to establish their presence online. I always
                            strive to learn about the newest technologies and frameworks.
                        </Text>
                        <Btn text={'Read more ->'}/>
                    </FlexWrapper>
                </div>
                <Image src={img}/>
            </FlexWrapper>
        </Container>
    );
};

const Image = styled.img`
    height: 505px;
    width: 340px;
    object-fit: contain;
`

const Text = styled.p`
    color: ${myTheme.colors.grey};
    margin: 25px 0;
    font-size: 16px;
    line-height: 1.65;
    font-weight: 400;
`