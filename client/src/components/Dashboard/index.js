import React from 'react';
import { NavContainer } from './styled';

const DetailDashboard = ({ description, heading }) => {
  const [isScrolledAway, setIsScrolledAway] = useState(true);
  return (
    <div>
      <NavContainer isScrolledAway={isScrolledAway} />
      <div className="text-center"></div>
      <div body>
        <div>{heading}</div>
        {description}
      </div>
    </div>
  );
};
export default DetailDashboard;
