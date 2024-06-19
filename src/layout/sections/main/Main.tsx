import React from 'react';
import styled from "styled-components";
import photo from '../../../assets/images/photoTop.png'
import {FlexWrapper} from "../../../components/FlexWrapper";
import {Container} from "../../../components/container";

export const Main = () => {
    return (
        <Container>
            <FlexWrapper justify={'space-between'} align={'center'}>
                <div>
                    <h1>
                        <span>Elias is a</span> web designer <span>and</span> front-end developer
                    </h1>
                    <p>
                        He crafts responsive websites where technologies meet creativity
                    </p>
                    <a href="#">
                        Contact me!!
                    </a>
                </div>
                <div>
                    <Photo src={photo}/>
                    <div>
                        Currently working on <strong>Portfolio</strong>
                    </div>
                </div>
            </FlexWrapper>
        </Container>
    );
};

// const StyledMain = styled.div`
//     min-height: 100;
// `

const Photo = styled.img`
    width: 460px;
    height: 385px;
    object-fit: cover;
`
// 1365px