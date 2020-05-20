/* eslint-disable react/jsx-key */
import * as React from 'react';
import './card.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState, useRef } from 'react';
//import Button from '../styled-components/Button';
import {
    Card,
    CardHeader,
    CardAction,
    CardBody,
    CardData,
    CardSubtitle,
    CardSubSection,
    CardSubSectionData,
    CardSubSectionLabel,
    CardSubSectionValue,
    CardTitle,
} from '../../styled-components/card';

interface CardSectionPropsInterface {
    cardTitle: string;
    cardSectionArr: Array<object>;
    cardArrangement?: string;
}

type IUser = {
    name: string;
    age: number;
};

// Written as a function declaration
function Heading(): React.ReactNode {
    return <h1>My Website Heading</h1>;
}

const CommonCard: React.FC<CardSectionPropsInterface> = (props: CardSectionPropsInterface) => {
    const { cardTitle, cardArrangement } = props;

    //using useref for expand/collapse arrow with card
    const cardContent = useRef(null);
    const upArrow = useRef(null);
    const downArrow = useRef(null);

    console.log(props);

    const { cardSectionArr } = props;

    console.log(cardSectionArr);

    //union types
    // const [user, setUser] = React.useState<IUser | null>(null);

    const toggleCard = (): void => {
        console.log(cardContent.current);
        cardContent.current.style.display =
            cardContent.current.style.display === 'flex' || cardContent.current.style.display === '' ? 'none' : 'flex';
        upArrow.current.style.display = cardContent.current.style.display === 'flex' ? 'none' : 'block';
        downArrow.current.style.display = cardContent.current.style.display === 'flex' ? 'block' : 'none';
    };

    return (
        <Card>
            <CardHeader>
                <CardTitle>{cardTitle}</CardTitle>
                <CardAction>
                    <i className="arrow down" ref={downArrow} onClick={toggleCard}></i>
                    <i className="arrow up" style={{ display: 'none' }} ref={upArrow} onClick={toggleCard}></i>
                </CardAction>
            </CardHeader>

            <CardBody
                cardTitle={cardTitle}
                cardArrangement={cardArrangement}
                ref={cardContent}
                style={{ flexDirection: cardTitle === 'Position' ? 'column' : 'row' }}
            >
                {cardSectionArr.map((element: object, _index: number) => (
                    <CardData>
                        <CardSubtitle>{element['section']}</CardSubtitle>
                        <CardSubSection>
                            {element['fields'].map((element2, index2) => (
                                <CardSubSectionData>
                                    <CardSubSectionLabel>{element2['name']}</CardSubSectionLabel>
                                    <CardSubSectionValue>{element2['value']}</CardSubSectionValue>
                                </CardSubSectionData>
                            ))}
                        </CardSubSection>
                    </CardData>
                ))}
            </CardBody>
            {/*   <div
                className="card-body"
                ref={cardContent}
                style={{ flexDirection: cardTitle === 'Position' ? 'column' : 'row' }}
            >
                {cardSectionArr.map((element: object, index: number) => (
                    <div className="card-data">
                        <h4 className="card-subtitle">{element['section']}</h4>
                        <div className="card-subsection">
                            {element['fields'].map((element2, index2) => (
                                <div className="card-subsection-data">
                                    <p className="card-subsection-label">{element2['name']}</p>
                                    <span className="card-subsection-value">{element2['value']}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div> */}

            {/*   <div className="card-body" ref={cardContent}>
                 {index === 0 && <div className="card-divider-vertical"></div>}
                {index === 0 && element['section'] === 'Access' && (
                            <div className="card-divider-vertical"></div>
                        )}
                                    {index === 0 && element['section']==='' &&  <span className="card-divider-horizontal"></span>}

                <div className="card-data">
                    <h4 className="card-subtitle">Access</h4>
                    <div className="card-subsection">
                        <div className="card-subsection-data">
                            <p className="card-subsection-label">Account Status</p>
                            <span className="card-subsection-value">Not activated</span>
                        </div>
                        <div className="card-subsection-data">
                            <p className="card-subsection-label">Lock Status</p>
                            <span className="card-subsection-value">locked</span>
                        </div>
                    </div>
                </div>
                <span className="card-divider"></span>
                <div className="card-data">
                    <h4 className="card-subtitle">Settings</h4>
                    <div className="card-subsection">
                        <div>
                            <p className="card-subsection-label">Login Profile</p>
                            <span className="card-subsection-value">arnab</span>
                        </div>
                    </div>
                </div>
            </div>  
                        <span className="card-divider"></span> */}
        </Card>
    );
};

export default CommonCard;
