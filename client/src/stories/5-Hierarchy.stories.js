/* eslint-disable @typescript-eslint/explicit-function-return-type */
import React from 'react';

//import PersonCard from '../client/src/components/personcard.tsx';
//import { personDetailsArr } from '../client/src/data/staticData';
import '../components/card.css';

const PersonCard = () => (
    <div className="card">
        <div className="card-header">
            <h4 className="card-title">Hierarchy</h4>
            {/* <h4>
                <i className="arrow down" ref={downArrow} onClick={toggleCard}></i>
                <i className="arrow up" style={{ display: 'none' }} ref={upArrow} onClick={toggleCard}></i>
            </h4> */}
        </div>
        <div className="card-body">
            <div className="card-data">
                <h4 className="card-subtitle">Version Info</h4>
                <div className="card-subsection">
                    <div className="card-subsection-data">
                        <p className="card-subsection-label">Start Date</p>
                        <span className="card-subsection-value">Not activated</span>
                    </div>
                    <div className="card-subsection-data">
                        <p className="card-subsection-label">End Date</p>
                        <span className="card-subsection-value">locked</span>
                    </div>
                    <div className="card-subsection-data">
                        <p className="card-subsection-label">Version Name</p>
                        <span className="card-subsection-value">Not activated</span>
                    </div>
                </div>
            </div>
        </div>
        <div className="card-body hierarchy">
            <div className="parent">
                <div className="hierarchyBox">Barbara Wilson</div>
            </div>
            <div className="parent">
                <div className="hierarchyBox">Barbara Wilson</div>
            </div>
            <div className="child" style={{ display: 'flex', flexDirection: 'row' }}>
                <div className="hierarchyBox">Tony Smith</div>
                <div className="hierarchyBox">Anthony Tailor</div>
                <div className="hierarchyBox">John Wilson</div>
                <div className="hierarchyBox">John Doe</div>
            </div>
        </div>
    </div>
);

export default {
    title: 'Hierarchy Card',
    component: PersonCard,
};

export const PersonCardStory = () => <PersonCard cardTitle="Position" />;

PersonCardStory.story = {
    name: 'card',
};
