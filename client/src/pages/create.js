import React from  'react';
import FormComp from '../components/Form';
import axiosInstance from '../api';
  
const createForm  = () => {
    
    const storeDocs = () => {
        axiosInstance.post('/storedocuments', data).then( response => {
            console.log("stored succesfully");
        })
    }    
    return (
          <FormComp submit ={storeDocs}/>
         )
};

export default createForm;