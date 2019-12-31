import React from 'react';
import classes from './App.css';
//import AmortCalculator from './containers/AmortCalculator';
import AssessmentForm from './components/Assessment/AssessmentForm'

function App() {
  return (
    <div className={classes.App}>
      <AssessmentForm />
    </div>
  );
}

export default App;
