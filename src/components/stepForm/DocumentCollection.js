import React from "react";
import {useRef} from "react";
import Container from "@material-ui/core/Container";
import './DocumentCollection.css';
export const DocumentCollection = () => {
  const inputFile = useRef(null) ;
  const onButtonClick = () => {
    // `current` points to the mounted file input element
   inputFile.current.click();
  };
  return (
    <Container maxWidth="sm" className="form">
    1.10th Marksheet*
    <br/>
    <input type='file' id='file' ref={inputFile} style={{display: 'none'}}/>
    <button onClick={onButtonClick} className="attachment"> &#128206; Attach file upto 5KB.</button>
       <br/>
       <br/>
    2.12th Marksheet*
    <br/>
    <input type='file' id='file' ref={inputFile} style={{display: 'none'}}/>
    <button onClick={onButtonClick} className="attachment">&#128206; Attach file upto 5KB.</button>
        <br/>
        <br/>
    3.Graduation Marksheet*
    <br/>
    <input type='file' id='file' ref={inputFile} style={{display: 'none'}}/>
    <button onClick={onButtonClick} className="attachment">&#128206; Attach file upto 5KB.</button>
<br/>
<br/>
 4.Postgraduation Marksheet*
    <br/>
    <input type='file' id='file' ref={inputFile} style={{display: 'none'}}/>
    <button onClick={onButtonClick} className="attachment">&#128206; Attach file upto 5KB.</button>
<br/>
<br/>
5.Offer Letter*
<br/>
<input type='file' id='file' ref={inputFile} style={{display: 'none'}}/>
    <button onClick={onButtonClick} className="attachment">&#128206; Attach file upto 5KB.</button>
<br/>
<br/>
5.Salary Slips*
<br/>
<input type='file' id='file' ref={inputFile} style={{display: 'none'}}/>
    <button onClick={onButtonClick} className="attachment">&#128206; Attach file upto 5KB.</button>
<br/>
<br/>
6.Bank Statement*
<br/>
<input type='file' id='file' ref={inputFile} style={{display: 'none'}}/>
    <button onClick={onButtonClick} className="attachment">&#128206; Attach file upto 5KB.</button>
<br/>
<br/>
7.Increment Letter (if any)*
<br/>
<input type='file' id='file' ref={inputFile} style={{display: 'none'}}/>
    <button onClick={onButtonClick} className="attachment">&#128206; Attach file upto 5KB.</button>
<br/>
<br/>
8.Others (if any)*
<br/>
<input type='file' id='file' ref={inputFile} style={{display: 'none'}}/>
    <button onClick={onButtonClick} className="attachment">&#128206; Attach file upto 5KB.</button>
<br/>
<br/>
  </Container>
  );
  
};
