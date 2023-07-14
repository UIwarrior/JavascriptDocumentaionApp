import React, { useEffect } from 'react';
import { Card } from '../styled-components/card';
import DetailDashboard from '../components/Dashboard';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom/cjs/react-router-dom.min';
import { useLocation } from 'react-router-dom/cjs/react-router-dom';
import { selectDocsData } from '../redux/slices/docs';
// import { userAccountArr } from '../data/staticData'
const viewDetails = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const id = searchParams.get('id');

  const docsData = useSelector(selectDocsData);
  const [currentDoc] = docsData.filter((doc) => doc._id === id);
  const { title, description } = currentDoc || {};

  return <DetailDashboard description={description} heading={title} />;
};

export default viewDetails;
