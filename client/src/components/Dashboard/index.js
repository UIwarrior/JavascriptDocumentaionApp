import React from 'react';
import { Media } from '@bootstrap-styled/v4';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const DetailDashboard = ({description, heading}) => {
 return (
    <Media>
    <Media className="text-center">
    </Media>
    <Media body>
      <Media heading>
        {heading}
      </Media>
      {description}
    </Media>
  </Media>
 )
 }
export default DetailDashboard;

