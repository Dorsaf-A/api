import React, { useState, useEffect } from "react";
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
       <li key={item.id}>
         <a href={item.website}>{item.username}</a>
       </li>
     ))}
   </ul>
   </div>
 );
}
export default App;
