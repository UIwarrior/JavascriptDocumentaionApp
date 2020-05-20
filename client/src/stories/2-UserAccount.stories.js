/* eslint-disable @typescript-eslint/explicit-function-return-type */
import React from 'react';

import Card from '../components/card/card.tsx';
import { userAccountArr } from '../data/staticData';

export default {
    title: 'UserAccountCard',
    component: Card,
};

export const cardStory = () => <Card cardTitle="User Account" cardSectionArr={userAccountArr} cardArrangement= "v" />;

cardStory.story = {
    name: 'card',
};
