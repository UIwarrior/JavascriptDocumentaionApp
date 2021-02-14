import React, { useEffect, useState } from 'react';
import { Row, CardText } from '@bootstrap-styled/v4';
import Header from '@bootstrap-styled/v4/lib/Header';
import Col from '@bootstrap-styled/v4/lib/Col';
import Container from '@bootstrap-styled/v4/lib/Container';
import { docsFetchData } from '../redux/actions';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';
import LCard from '../components/card';
import { CardTitle } from '../styled-components/card';
import { Link, useHistory } from 'react-router-dom';
import { CardDeck } from '@bootstrap-styled/v4/lib/Cards';
//import { useSelector } from 'react-redux/lib/hooks/useSelector';

const Home = (props) => {

    console.log(props);
    console.log("coming back props");
    const { docs = [] } = props;
    //const [cardArr, setCardArr] = useState([]);

    useEffect(() => {
 
        props.docsFetchData();
        console.log("card ref", cardRef.current);
        console.log("row ref", rowRef.current);
    }, [])

    let history = useHistory();

    function handleClick(data) {
     history.push({
      pathname: '/view',
      search: '?id='+data._id,
      state: {},
     })
    }
    
    const rowRef = React.createRef();

    const cardRef = React.createRef();

    return (
        <Container style={{margin:"20px"}}>
            <Row ref={rowRef}><Col sm={12}><Header>Home Page</Header></Col></Row>
            <Row>
                <CardDeck  ref={cardRef}>
                {docs.map(val => (
                    <LCard>
                    <p>{val.title}</p>
                    <p>{val.subtitle}</p>
                     <a href={val.link} target="_blank">Click</a>
                     <Link  onClick={() => handleClick(val)}>View Details</Link>
                   </LCard>
                )
                )}
                </CardDeck>
               
            </Row>
        </Container>
    );
}



const mapStateToProps = state => {
    return {
        docs: state.fetchDocuments.data
    };
};

//const mapDispatchToProps = { fetchData: docsFetchData }

const mapDispatchToProps = dispatch => bindActionCreators(
    {
        docsFetchData,
    },
    dispatch,
  )

export default connect(mapStateToProps, mapDispatchToProps)(Home);
                                                  
