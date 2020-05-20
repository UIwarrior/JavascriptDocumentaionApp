import * as React from 'react'
import { useState } from 'react';
import { connect } from 'react-redux';
//import { itemsFetchData } from '../actions/index';


interface IProps {
  name: String;
  age: Number;    
  items: Array<any>,
  fetchData: Function
}


// NEW syntax for typing function components
const DashboardComp: React.FunctionComponent<IProps> = (props: IProps) => {
      const [name, setName ] = useState('Arnab');
      const [age, setAge ] = useState(32);
      //const [person, setPerson ] = useState<IProps>({name: 'Arnab' , age: 32})

 
    useState(() => {

        //props.fetchData('http://5826ed963900d612000138bd.mockapi.io/items');
   /*  fetch('https://qaintx.talarianweb.com/xicm/icmadvanced/api/dashboardsmgr/v1/user-config?includeMaintenanceMsg=true&_=1583130423076').then(response => {
        console.log(response);
        console.log("respose from person");
        }) */
    });


      const updateCurrentPerson = () => {
        //setPerson();
      } 

    

return (
    <div>
       My Name is {name} and my age is {age}
       
       <form>
       <div>
       <label htmlFor="name">Enter your name</label>
       <input type ="text" name ="name" onChange = {e => setName(e.target.value)} />
       </div>
      <div>
          <p>Items list</p>
          <ul>
                {props.items.map((item) => (
                    <li key={item.id}>
                        {item.label}
                    </li>
                ))}
            </ul>
        </div>  
       </form>
      <input type="submit" onClick ={updateCurrentPerson} value="submit"/> 
     </div>
 );
}

const mapStateToProps = (state) => {
    return {
        items: state.items
    };
};



export default connect(mapStateToProps)(DashboardComp);
                                                  
