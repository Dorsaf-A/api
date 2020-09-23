import React, { useState, useEffect } from "react";
import { FcManager,FcKindle,FcAddressBook } from "react-icons/fc";
import axios from "axios";
import './App.css'

function App() {
 const [data, setData] = useState([]);
 useEffect(() => {
   const fetchData = async () => {
     const result = await axios.get(
       "https://jsonplaceholder.typicode.com/users"
     );
     setData(result.data);
   };
   fetchData();
 }, []);
 return (<div>
 <h2>List of users :</h2>
   <ul>
     {data.map(item => (
       <li key={item.id} >
         <ul className='details'>
         <li><FcManager/><b>Name :</b> {item.name}  </li>
         <li className='space'>  <FcKindle/>  <b>User Name :</b> {item.username}  </li>
         <li className='space'>  <FcAddressBook/>   <b>Email :</b> {item.email}</li>
         </ul>
       </li>
     ))}
   </ul>
   </div>
 );
}
export default App;
