import { useState,useEffect } from 'react'
import './App.css'
import axios from 'axios';
const API_BASE = import.meta.env.VITE_BACKEND_URL;
function App() {
  const [jokes,setJokes] = useState([]);

  useEffect(()=>{
        axios.get(`${API_BASE}/api/jokes`).then((response)=>{
          setJokes(response.data); 
        }).catch((error)=>{
          console.log(error);
          
        })
  }, [])

  return (
   <>
   <h1> Hi Hello</h1>
   <p> Jokes: {jokes.length}</p>  
   {
    jokes.map((joke,index)=>(
      <div key= {joke.id}>
        <h3>{joke.title}</h3>
        <p>{joke.content}</p>
      </div>
    ))
   }
   </>
  )
}

export default App;
