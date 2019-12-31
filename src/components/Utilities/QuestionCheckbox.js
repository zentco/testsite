import React from 'react';
import classes from './QuestionCheckbox.css'

const QuestionCheckbox = ( props ) => {
    return (
        <div className={classes.question_data_row}>
            <div className={classes.columnsTwoThirds} style={{'display':'flex'}}>
                <label style={{'margin':'9px 0px'}}>{props.question}</label>
            </div>
            <div className={classes.columnsOneThird}>
                <input 
                    type="checkbox"
                    name={props.question}
                    defaultChecked={props.stateValue}
                    onClick={props.handleQAChange}
                />
            </div>
        </div>
    );
};

export default QuestionCheckbox;