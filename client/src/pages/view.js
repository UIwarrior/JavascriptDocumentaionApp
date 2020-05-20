import React from 'react';
import { Card } from '../styled-components/card';
import { userAccountArr } from '../data/staticData'
const viewDetails = () => {
    return (
        <Card cardTitle="User Account" cardSectionArr={userAccountArr} />
    )
}

export default viewDetails;