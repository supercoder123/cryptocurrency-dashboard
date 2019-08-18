import React from 'react';
import styled from 'styled-components';

import {subtleBoxShadow, lightBlueBackground, redBoxShadow, greenBoxShadow} from '../shared/Styles';

export const Tile = styled.div`
    ${subtleBoxShadow};
    ${lightBlueBackground};
    padding: 10px;
`;

export const SelectableTile = styled(Tile)`
&:hover{
    cursor: pointer;
    ${greenBoxShadow};
    }
`;