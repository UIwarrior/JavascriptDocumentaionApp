import React from 'react';
import { Card, CardHeader, CardBody } from '../../styled-components/card';
import {Collapse } from 'bootstrap-styled';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const LCard = ({isOpen}) => {

    //using useref for expand/collapse arrow with card
    const cardContent = useRef(null);
    const upArrow = useRef(null);
    const downArrow = useRef(null);

    console.log(props);

    const toggleCard = () => {
        console.log(cardContent.current);
        cardContent.current.style.display =
            cardContent.current.style.display === 'flex' || cardContent.current.style.display === '' ? 'none' : 'flex';
        upArrow.current.style.display = cardContent.current.style.display === 'flex' ? 'none' : 'block';
        downArrow.current.style.display = cardContent.current.style.display === 'flex' ? 'block' : 'none';
    };

    console.log(cardSectionArr);

    return (
          <Card>
           <Collapse isOpen={isOpen}>
           <CardBody ref={cardContent}>{children}</CardBody>
           </Collapse>
          </Card>
    )
}

export default LCard;
