/* eslint-disable @typescript-eslint/explicit-function-return-type */
import styled from 'styled-components';

const LearnCardHeader = styled.div`
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

const crdSubSectionData = styled.div`
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

export{
    LearnCardHeader,
    CardAction,
    CardBody,
    CardTitle,
    CardSubsectionData,
    CardSubsectionLabel,
    CardData,
    CardSubtitle,
    CardSubSection,
    CardSubSectionLabel,
    CardSubSectionValue,
};
