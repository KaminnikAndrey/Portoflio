import React from 'react';
import {FlexWrapper} from "../../../../components/FlexWrapper";
import {Btn} from "../../../../components/button/Btn";
import {S} from "./Item_Styles"

type ItemPropsType = {
    src: string
    title: string
    name: string
    text: string
    btn: number
}

export const Item:React.FC<ItemPropsType> = (props: ItemPropsType) => {
    return (
        <S.Item as={'li'}>
            <FlexWrapper direction={'column'}>
                <S.Image src={props.src} alt="project picture"/>
                <S.Title>{props.title}</S.Title>
                <FlexWrapper direction={'column'} gap={'15px'} padding={'15px'}>
                    <S.Name>{props.name}</S.Name>
                    <S.Text>{props.text} </S.Text>
                    {props.btn === 2 ?
                        <FlexWrapper gap={'15px'}>
                            <Btn text={'Live <~>'}/>
                            <Btn text={'Cached >='} border={'gray'}/>
                        </FlexWrapper>
                        : <Btn text={'Live <~>'}/>
                    }
                </FlexWrapper>
            </FlexWrapper>
        </S.Item>
    )
        ;
};

