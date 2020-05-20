/* eslint-disable @typescript-eslint/explicit-function-return-type */
import styled from 'styled-components';

const Card = styled.div`
    position: relative;
    padding: 10px;
    min-width: 0;
    word-wrap: break-word;
    background-color: #fff;
    background-clip: border-box;
    box-shadow: 0px 2px 10px 2px grey;
    border-top: 5px solid cornflowerblue;
    border-radius: 0.25rem;
    margin: 10px;
`;

const CardHeader = styled.div`
    display: flex;
    flex-direction: row;
`;

const CardAction = styled.span`
    float: left;
`;

const CardBody = styled.div`
    display: flex;
    flex-direction: ${props => (props.cardArrangement === 'v' ? 'row' : 'column')};
`;

const CardSubsectionData = styled.div`
    display: flex;
    flex-direction: row;
`;

const CardSubsectionLabel = styled.div`
    margin: 0px;
`;

const CardTitle = styled.h4`
    margin: 5px;
    font-weight: bold;
    float: left;
`;

const CardData = styled.div`
    margin: 15px;
`;

const CardSubtitle = styled.h4``;

const CardSubSection = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
`;

const CardSubSectionData = styled.div`
    flex-basis: 300px;
    flex-grow: 2;
    margin: 10px;
`;

const CardSubSectionLabel = styled.p`
    margin: 0px;
`;

const CardSubSectionValue = styled.span`
    color: #949393;
`;

export {
    Card,
    CardHeader,
    CardAction,
    CardBody,
    CardTitle,
    CardSubsectionData,
    CardSubsectionLabel,
    CardData,
    CardSubtitle,
    CardSubSection,
    CardSubSectionData,
    CardSubSectionLabel,
    CardSubSectionValue,
};
