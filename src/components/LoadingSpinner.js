import React from "react";
import classes from '../styles/loadingSpinner.module.css';

export default function LoadingSpinner() {
  return (
    <div className={classes.spinner_container}>
      <div className={classes.loading_spinner}>
      </div>
    </div>
  );
}