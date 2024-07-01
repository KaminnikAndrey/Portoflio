import React from 'react';
import iconsSprite from '../../assets/images/icons-sprite.svg'
import styled from "styled-components";

type IconPropsType = {
    iconId: string
    width: string
    height: string
    viewBox?: string
    position?: string
    left?: string
    top?: string
    right?: string
    bottom?: string
    zIndex?: string
}

type StyledIconPropsType = {
    position?: string
    left?: string
    top?: string
    right?: string
    bottom?: string
    zIndex?: string
}

export const Icon: React.FC<IconPropsType> = (props: IconPropsType) => {
    return (
        <IconStyled position={props.position} left={props.left} top={props.top} right={props.right}
                    bottom={props.bottom} zIndex={props.zIndex}>
            <svg width={props.width} height={props.height} viewBox={props.viewBox} fill='none'
                 xmlns="http://www.w3.org/2000/svg">
                <use xlinkHref={`${iconsSprite}#${props.iconId}`}/>
            </svg>
        </IconStyled>
    );
};

const IconStyled = styled.div<StyledIconPropsType>`
    position: ${props => props.position ? props.position : 'static'};
    left: ${props => props.left ? props.left : 'none'};
    top: ${props => props.top ? props.top : 'none'};
    right: ${props => props.right ? props.right : 'none'};
    bottom: ${props => props.bottom ? props.bottom : 'none'};
    z-index: ${props => props.zIndex ? props.zIndex : 'none'};
`