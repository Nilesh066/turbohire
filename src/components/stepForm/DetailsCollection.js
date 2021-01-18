import React from "react";
import Container from "@material-ui/core/Container";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import './DetailsCollection.css';
export const DetailsCollection = ({ formData, setForm, navigation }) => {
  const { Name, email, location, phone ,category} = formData;
  
  return (<div>
    <Container maxWidth="sm" className="form">
      <div className="details-form">
      1. Name*
      <TextField
        label="Enter a Valid Salary in numbers e.g 50,000/-"
        name="Name"
        className="salary"
        value={Name}
        onChange={setForm}
        margin="normal"
        variant="outlined"
        autoComplete="off"
        required
        fullWidth
      />
      <br></br><br/>
      2. Email*
      <TextField
        label="Example - userid@gmail.com"
        name="website"
        value={email}
        onChange={setForm}
        margin="normal"
        variant="outlined"
        required
        autoComplete="off"
        fullWidth
      /><br></br><br/>
      3. Date of Birth
      <br/>
      <TextField
    id="date"
    type="date"
    onChange={setForm}
    variant="outlined"
    InputLabelProps={{
      shrink: true,
    }}
  />
      <br></br><br/>
      4. Contact no
       <TextField
        label="Enter your 10 digit contact no"
        name="phone"
        value={phone}
        onChange={setForm}
        margin="normal"
        variant="outlined"
        autoComplete="off"
        fullWidth
      />
      </div>
    </Container>
    </div>
  );
};
