import logo from './logo.svg';
import './App.css';
import React, {Component,useEffect, useState}from 'react'


function App() {
 
  useEffect(() => {
    fetch("https://https://terriblytinytales.com/testapi?rollnumber=123").then((result)=>{
      result.json().then((resp)=>{
        console.log("result")
      })
      
    })
  }, [])
  
  const [data,setdata]=useState(null)
  const [print,setPrint]=useState(false)
  function getData(val){
    setdata(val.target.value)
    setPrint(false)
    //console.log(val.target.value)
  }
    return (
    <div className="App">
    
      
     <input type="text" onChange={getData}/>

     <button onClick={()=>setPrint(true)}>Submit </button>
       {
        print?
        
        <h1>{data.split(" ")}</h1>
        :null
      }
    </div>
  );
}

export default App;
