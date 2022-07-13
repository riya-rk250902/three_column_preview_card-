import React from 'react';
// import './App.css';

import Sedan from './Sedan';
import Suv from './Suv';
import Luxury from './Luxury';
import "./pcard.css";
function App() {
  return (
    <React.Fragment>
      <div className="card_container">
        <Sedan/>
        <Suv/>
        <Luxury/>
      </div>
    </React.Fragment>
  );
}
export default App;





//import React ,{ useState } from "react";
//import axios from "axios";
//import { Button,Row,Col } from 'react-bootstrap';
//function App() {
  //const [data, setData]=useState(0);
//const Handle = async () => {
  //try {
    //const val = (await axios.get("https://randomuser.me/api/")).data
      //.results[0].name.first;
    //console.log(val);
    //setData(val);
  //} catch (error) {
   // console.log(error);
  //}
//}; 
//return(
 //<div className="App">
  //<div>{data}
  //</div>
  //<button onclick={Handle}>handle</button>
  //<Row className="mx-0">
  //<Button as={Col} variant="primary">Button #1</Button>
  //<Button as={Col} variant="secondary" className="mx-2">Button #2</Button>
  //<Button as={Col} variant="success">Button #3</Button>
//</Row>
 // </div>
//);
//}



//useEffect(() => {
  //async function fetchData() {
    //try {
      //const val = (await axios.get("https://randomuser.me/api/")).data
        //results[0].name.first;
      //console.log(val);
      //setData(val);
    //} catch (error) {
     // console.log(error);
    //}
  //}
  //fetchData();
//}, []);
