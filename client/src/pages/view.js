import React from 'react';
import { Card } from '../styled-components/card';
// import { userAccountArr } from '../data/staticData'
const viewDetails = (props) => {
    console.log("props", props);
    return (
        <DetailDashboard description = {props.description} heading = {props.heading} />
    )
}

export default viewDetails;