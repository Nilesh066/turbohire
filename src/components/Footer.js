import { Button } from '@material-ui/core';
import React from 'react';
import './footer.css';
const Footer=(props)=>{
    return(
        <div className="footer">
            <div className="next">
             <Button
        variant="contained"
        color="primary"
        style={{ marginTop: "1rem" }}
      >
      Next
      </Button>
      </div>
            </div>
    )
}
export default Footer;