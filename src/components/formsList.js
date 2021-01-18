import React from 'react';
import './formsList.css';
import {useEffect} from 'react';
const FormList=({navigation,openStep})=>{
    return(
        <div className="container-form">
            <ul>
                <li onClick={()=>{window.location.reload()}}>
                    <div className="box"></div>
                    <div className="details">
                    <header><h4>New Form</h4></header>
                    <p>Start creating new form with wide options of field available</p>
                    </div>
                </li>
                <div className="templetes">
                <span>Explore the following templetes:</span>
                <li onClick={()=>{navigation.go(0)}}>
                <div className="box"></div>
                    <div className="details">
                    <header><h4>Details Collection</h4></header>
                    <p>Collect information from Candidates on their, education, work experience, contact no, etc.</p>
                    </div>
                </li>
                <li onClick={()=>{navigation.go(1)}}>
                <div className="box"></div>
                    <div className="details">
                    <header><h4>Document Collection</h4></header>
                    <p>Save time and efforts.Explore this tempelete to find the set of questions required for document collection.</p>
                    </div>
                </li>
                <li onClick={()=>{navigation.go(2)}}>
                <div className="box"></div>
                    <div className="details">
                    <header><h4>Statement of Purpose</h4></header>
                    <p>Start creating new form with wide options of field available</p>
                    </div>
                </li>
                <li onClick={()=>{navigation.go(3)}}>
                <div className="box"></div>
                    <div className="details">
                    <header><h4>Interview Availibility</h4></header>
                    <p>Start creating new form with wide options of field available</p>
                    </div>
                </li>
                </div>
            </ul>
        </div>
    )
}
export default FormList;