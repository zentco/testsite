import React from 'react';
import Button from '../Utilities/Button';
import classesBudget from '../Assessment/AssessmentBudget.css';

const AssessmentRecommendations = ( props ) => {

    return (
        props.recOptions.map(option => (
            <div key={option.Text} className={classesBudget.form_control}>
                <label>{option.Text}</label>
                <div className={classesBudget.form_control_div}>
                    <Button 
                    clicked={console.log("clicked")}
                    url={option.URL}
                    >Learn More</Button>
                </div>
            </div>
        )) 
    );
};

export default AssessmentRecommendations;