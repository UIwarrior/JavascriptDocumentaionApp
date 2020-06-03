import React from 'react';
import {
    CardHeader,
    CardAction,
    CardTitle,
} from '../../styled-components/card';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const LCardHeader = ({toggleCard}) => {
    return (
        <CardHeader>
        <CardTitle>{cardTitle}</CardTitle>
        <CardAction>
            <i className="arrow down" ref={downArrow} onClick={toggleCard}></i>
            <i className="arrow up" style={{ display: 'none' }} ref={upArrow} onClick={toggleCard}></i>
        </CardAction>
    </CardHeader>
    )
}

export default LCardHeader;