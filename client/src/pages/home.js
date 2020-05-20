import React, { useEffect, useState } from 'react';
import axiosInstance from '../api';
import { Row } from '@bootstrap-styled/v4';
import Header from '@bootstrap-styled/v4/lib/Header';
import Col from '@bootstrap-styled/v4/lib/Col';
import Tile from '../components/Tile/tile';
import Container from '@bootstrap-styled/v4/lib/Container';
import { docsFetchData } from '../redux/actions';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';
//import { useSelector } from 'react-redux/lib/hooks/useSelector';


const Home = (props) => {

    console.log(props);
    console.log("coming back props");
    const { docs = [] } = props;
    useEffect(() => {
 
        props.docsFetchData();

    }, [])


    return (
        <Container style={{margin:"20px"}}>
            <Row><Col sm={12}><Header>Home Page</Header></Col></Row>
            <Row>
                {docs.map(val => (
                    <Col sm={6}><Tile data={val} /></Col>

                )
           )}
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
                                                  
