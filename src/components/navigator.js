import React from 'react';
import './navigator.css';
import {useState} from 'react';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';

const Navigator=(props)=>{
  const [steps,setSteps]=useState(["Form Selection","Set up","Form Creation", "Review"]);
     return(
      <div className="checkForm" >
        <div className="container">
      <Stepper activeStep={0}>
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
      <label onClick={props.handleShowStep} className="close">&#9747;</label>
      <hr/>
      </div>
      </div>
    )
}

export default Navigator;