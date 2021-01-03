import React,{useState} from 'react';
import TablePart from './TablePart'; 
import {povider,Provider} from "react-redux";
import store from "./store";
import {useSelector} from "react-redux";


//const datas = useSelector(state=>state.rows);
//const rows=datas;

export default function SimpleTable() {

  //const [data,setdata]=useState(rows);
  //const [q,setQ] = useState("");

  const datas = useSelector(state=>state.rows);
const rows=datas;

  
  return (



    <div>
      
      <div><TablePart  text={{name:'chirag'}} /></div>
    </div>

    
  );

}