/* eslint-disable @typescript-eslint/explicit-function-return-type */
import React from 'react';

import Card from '../components/card/card.tsx';
import { postionSectionArray } from '../data/staticData';;

export default {
    title: 'PositionCard',
    component: Card,
};

export const cardStory = () => <Card cardTitle="Position" cardSectionArr={postionSectionArray} />;

cardStory.story = {
    name: 'card',
};
