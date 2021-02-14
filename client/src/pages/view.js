import React from 'react';
import { Card } from '../styled-components/card';
import DetailDashboard from '../components/Dashboard';
import { useSelector } from 'react-redux';
// import { userAccountArr } from '../data/staticData'
const viewDetails = (props) => {
    console.log("props location", props);
    const state = useSelector(store => store)
    console.log(state);

    return (
        <DetailDashboard description = {props.description} heading = {props.heading} />
    )
}

export default viewDetails;