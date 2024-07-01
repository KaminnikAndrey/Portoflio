import React from 'react';
import {Container} from "../../../components/Container";
import {FlexWrapper} from "../../../components/FlexWrapper";
import {S} from "./Quote_Styles"

export const Quote: React.FC = () => {
    return (
        <S.Quote>
            <Container maxWidth={'745px'} isAdaptoveWidthMD={true}>
                <FlexWrapper direction={'column'} align={'flex-end'} isAdaptiveWidthFitContentMD={true}>
                    <S.Q>
                        With great power comes great electricity bill
                    </S.Q>
                    <S.Q>
                        - Dr. Who
                    </S.Q>
                </FlexWrapper>
            </Container>
        </S.Quote>
    );
};

