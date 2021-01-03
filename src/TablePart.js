import { Button } from '@material-ui/core';
import {useState} from 'react';
import React from 'react';
import {useSelector} from "react-redux";
import './MainStyle.css';



const TablePart = (prop) => {
   

    //const [data,setData]=useState(datas);

    const datas = useSelector(state=>state.rows);

    return(

        <table cellPadding='4' cellSpacing='10'>
            <thead >


                <tr>
                     <th align='left'>name</th>
                     <th align='left'>calories</th>
                     <th align='left'>fat</th>
                     <th align='left'>carbs</th>
                     <th align='left'>protine</th>
                     <th align='left'>View</th>
                </tr>
            </thead>
            <tbody>
                {
                datas.map(row =>(

                    <tr>
 
                    <td>{row.name}</td>
                    <td>{row.calories}</td>
                    <td>{row.fat}</td>
                    <td>{row.carbs}</td>
                    <td>{row.protein}</td>
                    <td><Button class="button"></Button ></td>
                    </tr>

                            )
                   )
                   
                
                }
                
            </tbody>





        </table>





    );


}

export default TablePart;