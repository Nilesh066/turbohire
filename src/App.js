import React,{useState} from "react";
import { MultiStepForm } from "./components/MultiStepForm";
import {BrowserRouter,Link} from 'react-router-dom';
import './App.css';
import Navigator from './components/navigator';
import FormList from './components/formsList';
import { Checkbox, Input } from "@material-ui/core";
import Footer from './components/Footer';
function App() {
  const [loggedIn,setLoggedIn]=useState(false);
  const login=()=>{
    setLoggedIn(true)
  }
  const handleShowStep=()=>{
    setShowstep(false);
  }
  const openStep=()=>{
    setShowstep(true);
  }
  const [showStep,setShowstep]=useState(true);
  if(showStep===true){
  return (
    <div className="App">
      <Navigator handleShowStep={handleShowStep} ></Navigator>
      <MultiStepForm login={login} showstep={openStep}/>
      <Footer/>
    </div>
  );
  }
  else{
    return(<div className="App">
      <MultiStepForm login={login} showstep={openStep}/>
      <Footer/>
    </div>)
  }
}

export default App;
