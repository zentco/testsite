import React from 'react';
import classes from './QuestionCheckbox.css'

const QuestionMultiCheckbox = ( props ) => {

    return (
        <div className={classes.question_data_row}>
            <div className={classes.columnsTwoThirds} style={{'display':'flex'}}>
                <label style={{'margin':'9px 0px'}}>{props.question}</label>
            </div>
            <div className={classes.columnsOneThird}>

                {props.options.map(obj => (
                <div key={obj.StateName} className={classes.question_data_row} style={{'display': 'flex'}}>
                    <input style={{'width': '20px'}}
                        type="checkbox"
                        name="multiple"
                        value={obj.Option}
                        id={obj.StateName}
                        defaultChecked={props.stateValues[obj.StateName]}
                        onClick={props.handleQAChange(obj.StateName, props.questionCategory)}
                    />
                    <br></br>
                    <label htmlFor={obj.StateName}>{obj.Option}</label>
                </div>
                ))} 
            </div>
        </div>
    );
};

export default QuestionMultiCheckbox;