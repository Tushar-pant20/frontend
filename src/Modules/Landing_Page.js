import React, { useEffect, useState } from 'react'
import axios from "axios";

function Landing_Page() {

    const [apidata,setapidata] = useState([]);

    const mygetdata = ()=> {
        axios.get('http://localhost:8080/alldata').then((res)=>{
            setapidata(res.data);
            console.log(apidata)
        })
    }

    useEffect(()=>{
        mygetdata();
    },[])

  return (
    <div>
        <table border='2' cellPadding='10' align='center'>
            <tr>
                <th>S.no</th>
                <th>Db_id</th>
                <th>Name</th>
                <th>Email</th>
                <th>phone</th>
                <th>gender</th>
                <th>City</th>
                <th>Action</th>
            </tr>
            {apidata.map((item,i=1)=>{
                return(
                    <tr>
                        <td>{++i}</td>
                        <td>{item._id}</td>
                        <td>{item.Name}</td>
                        <td>{item.email}</td>
                        <td>{item.phone}</td>
                        <td>{item.gender}</td>
                        <td>{item.city}</td>
                        <td>
                            <button>View</button>
                            <button>edit</button>
                            <button>delete</button>
                        </td>
                    </tr>
                )
            })}
        </table>
    </div>
  )
}

export default Landing_Page