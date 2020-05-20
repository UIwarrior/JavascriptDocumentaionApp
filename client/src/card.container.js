
import React from 'react';
import {
  Card,
  CardBlock,
  CardTitle,
  CardSubtitle,
  CardText,
  Button,
} from '@bootstrap-styled/v4';
import BootstrapProvider from '@bootstrap-styled/provider';


const CardContainer = (props) => {
  console.log(props);
  const { title, subtitle, description, link } = props.data;
  return (
    <BootstrapProvider >
    <Card style={{borderTop:"1px solid #e5e5e5", boxShadow:"5px 10px 8px #888888;"}}>
        <div>Test Card</div>
    </Card>
    </BootstrapProvider>
      )
}

export default CardContainer;

/* const mapDispatchToProps = dispatch => bindActionCreators(
    {
      sendMessage,
      deleteMessage,
    },
    dispatch,
  )
 */