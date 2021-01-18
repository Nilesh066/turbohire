import React from "react";
import Container from "@material-ui/core/Container";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import './StatementOfPurpose.css';
export const StatementOfPurpose = ({ formData, setForm, navigation }) => {
  const { des,desc,descr} = formData;
  
  return (<div>
    <Container maxWidth="sm" className="form">
      <div className="details-form">
      <p>1. Tell me about a time you were asked to do something you had never done before.How did you react ?What did you learn?</p>
     <TextField
         label="Enter a description for the long answer"
         name="des"
         className="des"
         value={des}
         onChange={setForm}
         margin="normal"
         variant="outlined"
         autoComplete="off"
         required
         fullWidth
       />
      <br/>
      <br/><br/>
      <p>2. Tell me about the last time something significant didn't go according to plan at work.What was your role ?What was the outcome?</p>
    
     <TextField
         label="Enter a description for the long answer"
         name="desc"
         className="desc"
         value={desc}
         onChange={setForm}
         margin="normal"
         variant="outlined"
         autoComplete="off"
         required
         fullWidth
       />
  
      <br/><br/><br/>
      <p>3. What are the three things that are most important to you in job?</p>
     <TextField
         label="Enter a description for the long answer"
         name="descr"
         className="descr"
         value={descr}
         onChange={setForm}
         margin="normal"
         variant="outlined"
         autoComplete="off"
         required
         fullWidth
       />
      </div>
    </Container>
    </div>
  );
};

export default StatementOfPurpose;