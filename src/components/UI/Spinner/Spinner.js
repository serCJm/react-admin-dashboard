import React from 'react';
import classes from "./Spinner.module.css"
// taken from: https://codepen.io/AlexWarnes/pen/jXYYKL

const Spinner = () => {
    return ( <div className={classes.spinnerBox}>
    <div className={classes.configureBorder1}>
      <div className={classes.configureCore}></div>
    </div>
    <div className={classes.configureBorder2}>
      <div className={classes.configureCore}></div>
    </div>
  </div> );
}

export default Spinner;