import React, { useState } from 'react';
import './App.css';

function App() {
  let time = new Date().toLocaleTimeString();

  const [ctime , setCtime]= useState(time);

  const  updatetime =()=>{
    let time = new Date().toLocaleTimeString();
    setCtime(time);
  }
  setInterval (updatetime,1000)
  return (
    <>
    <h2>Digital Clock</h2>
    <h1>{ctime}</h1>
    {/* <button onClick={updatetime}>get time </button> */}
    </>
  );
}

export default App;
