import { Media } from '@bootstrap-styled/v4';

const DetailDashboard = ({description, heading}) => {
 return (
    <Media>
    <Media href="javascript:;" className="text-center">
      <Media fluid object src={favicon} className="w-50" alt="64x64" />
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

