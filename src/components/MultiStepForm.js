import React,{useState} from "react";
import { useForm, useStep } from "react-hooks-helper";
import { DetailsCollection } from "./stepForm/DetailsCollection";
import  StatementOfPurpose  from "./stepForm/StatementOfPurpose";
import { DocumentCollection } from "./stepForm/DocumentCollection";
import { InterviewAvailability } from "./stepForm/InterviewAvailability";
import FormList from "./formsList";
import './Multiform.css';
const defaultData = {};


const steps = [
  { id: "DetailsCollection" },
  { id: "DocumentCollection" },
  { id: "StatementOfPurpose" },
  { id: "InterviewAvailability" }
];

export const MultiStepForm = ({openForm,login}) => {
  const [formData, setForm] = useForm(defaultData);
  const { step, navigation } = useStep({
    steps,
    initialStep: 0,
  });
  const props = { formData, setForm, navigation,  login};
  switch (step.id) {
    case "DetailsCollection":
      return (
      <div>
           <div className="header"><h3>Preview</h3>
           <p>You will be able to customize the field in the later stage</p>
           <div className="info">
             <h3>Details Collection</h3>
             <p>This is detail collection form.</p>
             Provide the following information to process your application.
           </div>
           </div>
        <FormList {...props} openForm={openForm}/>
        <div className="form-display">
        <DetailsCollection {...props} />
        </div>
        </div>);
    case "DocumentCollection":
      return (
        <div>
          <div className="header"><h3>Preview</h3>
           <p>You will be able to customize the field in the later stage</p>
           <div className="info">
             <h3>Document Collection</h3>
             <p>This is document collection form.</p>
             Provide the following information to process your application.
           </div>
           </div>
        <FormList {...props} openForm={openForm}/>
        <div className="form-display">
      <DocumentCollection {...props} />
      </div>
      </div>
      );
    case "StatementOfPurpose":
      return (
      <div>
        <div className="header"><h3>Preview</h3>
           <p>You will be able to customize the field in the later stage</p>
           <div className="info">
             <h3>Statement Of Purpose</h3>
             <p>This is statement of purpose form.</p>
             Provide the following information to process your application.
           </div>
           </div>
        <FormList {...props} openForm={openForm}/>
        <div className="form-display">
        <StatementOfPurpose {...props} />
        </div>
        </div>) ;
    case "InterviewAvailability":
      return (
      <div>
        <div className="header"><h3>Preview</h3>
           <p>You will be able to customize the field in the later stage</p>
           <div className="info">
             <h3>Interview Availability</h3>
             <p>This is interview availibility form.</p>
             Provide the following information to process your application.
           </div>
           </div>
        <FormList {...props} openForm={openForm}/>
        <div className="form-display">
        <InterviewAvailability {...props} openForm={openForm}/>
        </div>
        </div>);
      default:return <></>
  }
};
