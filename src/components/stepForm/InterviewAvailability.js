import React from "react";
import Container from '@material-ui/core/Container';
import TextField from "@material-ui/core/TextField";
import OutlinedInput from "@material-ui/core/OutlinedInput";
import InputAdornment from '@material-ui/core/InputAdornment';
import Select from '@material-ui/core/Select';
import Button from "@material-ui/core/Button";
import { Label } from "@material-ui/icons";

export const InterviewAvailability = ({ formData,setForm, navigation }) => {

  return (
    <Container maxWidth="sm" className="form">
      1.Email*
      <TextField label="Example -userid@gmail.com"
         name="des"
         className="des"
         required
         onChange={setForm}
         margin="normal"
         variant="outlined"
         autoComplete="off"
         required
         fullWidth></TextField>
         <br/>
         <br/>
      2.Location*
      <br/>
      <OutlinedInput
            id="outlined-adornment-location"
            startAdornment={<InputAdornment position="start">&#x1F50D;</InputAdornment>}
            labelWidth={60}
            fullWidth
          />
          <br/>
          <br/>
      3.Interview Date
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
  <br/>
  <br/>
   3.Interview Time
      <br/>
      <TextField
    id="date"
    type="time"
    defaultValue="12:00"
    onChange={setForm}
    variant="outlined"
    InputLabelProps={{
      shrink: true,
    }}
  />
  <br/>
  <br/>
  4.Time Zone
  <br/>
  <Select variant="outlined" fullWidth></Select>
  <br/>
  <br/>
  5.Interview Medium
  <Select variant="outlined" fullWidth></Select>
    </Container>
  );
};
