import React from 'react';
import { LearnCard, CardHeader, CardBody } from '../../styled-components/card';
import {Collapse } from 'bootstrap-styled';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import BootstrapProvider from '@bootstrap-styled/provider/lib/BootstrapProvider';
const LCard = ({isOpen, ref, children}) => {

    //using useref for expand/collapse arrow with card
    // const cardContent = useRef(null);
    //const upArrow = useRef(null);
    // const downArrow = useRef(null);

 /*    const toggleCard = () => {
        console.log(cardContent.current);
        cardContent.current.style.display =
            cardContent.current.style.display === 'flex' || cardContent.current.style.display === '' ? 'none' : 'flex';
        upArrow.current.style.display = cardContent.current.style.display === 'flex' ? 'none' : 'block';
        downArrow.current.style.display = cardContent.current.style.display === 'flex' ? 'block' : 'none';
    };
 */
    //console.log(cardSectionArr);

    return (
          <LearnCard ref={ref}>
              {children}
          </LearnCard>
    )
}

export default LCard;


/* 
export const Tile = (props) => {
  console.log(props);
  const { title, subtitle, description, link } = props.data;
  return (
    <BootstrapProvider >
    <LCard>
    <CardBlock>
      <CardTitle>{title}</CardTitle>
      <CardSubtitle>{subtitle}</CardSubtitle>
      <CardText>{description}</CardText>
      <a href={link} target="_blank">Click</a>
    </CardBlock>

    </LCard>
    </BootstrapProvider>
      )
} */
