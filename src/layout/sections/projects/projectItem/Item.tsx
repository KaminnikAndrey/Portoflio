import React from 'react';
import {FlexWrapper} from "../../../../components/FlexWrapper";
import {Btn} from "../../../../components/button/Btn";
import styled from "styled-components";
import {myTheme} from "../../../../styles/Theme.styled";

type ItemPropsType = {
    src: string
    title: string
    name: string
    text: string
    btn: number
}

export const Item = (props: ItemPropsType) => {
    return (
        <StyledItem>
            <FlexWrapper direction={'column'}>
                <Image src={props.src} alt="project picture"/>
                <Title>{props.title}</Title>
                <FlexWrapper direction={'column'} gap={'15px'} padding={'15px'}>
                    <Name>{props.name}</Name>
                    <Text>{props.text} </Text>
                    {props.btn === 2 ?
                        <FlexWrapper gap={'15px'}>
                            <Btn text={'Live <~>'}/>
                            <Btn text={'Cached >='} border={'gray'}/>
                        </FlexWrapper>
                        : <Btn text={'Live <~>'}/>
                    }
                </FlexWrapper>
            </FlexWrapper>
        </StyledItem>
    )
        ;
};

const StyledItem = styled.div`
    border: 1px solid ${myTheme.colors.grey};
    width: 330px;
    height: fit-content;
`

const Image = styled.img`
    width: 330px;
    height: 200px;
    object-fit: cover;
`

const Title = styled.h3`
    font-weight: 400;
    color: ${myTheme.colors.grey};
    font-size: 16px;
    display: block;
    border: 1px solid ${myTheme.colors.grey};
    padding: 8px;
`

const Name = styled.span`
    display: block;
    font-size: 24px;
    font-weight: 500;
    color: ${myTheme.colors.white};
`

const Text = styled.h3`
    font-weight: 400;
    color: ${myTheme.colors.grey};
    font-size: 16px;
    display: block;
`
