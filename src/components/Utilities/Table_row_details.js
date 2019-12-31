import React from 'react';
import classes from './Table_row_details.css'

const Table_row_details = ( props ) => {
    //const { handleChange } = props

    // const calcAllocationPerc = categoryIncome => event =>  {
    //     //alloc = category / income * 100
    //     const percAlloc = categoryIncome / {income} * 100;
        
    //     return(percAlloc);
    //}

    // const valueChecker = ( props ) => {
    //     (props.valueInput ? 0 : props.valueInput)
    // }

    return (
        <tr className={classes.table_data_row}>
            <td>{props.category}<br></br><span className={classes.small_font}>{props.categoryNote}</span></td>
            <td>
                <div className={classes.form_control_div}>
                    <input
                    type="number"
                    id={props.idInput}
                    placeholder={0}
                    onChange={props.handleStateChange}
                    value={((props.valueInput === 0) ? "" : props.valueInput)}
                    //defaultValue={props.defaultvalueInput}
                    min={0}
                    />
                </div>
            </td>
            <td>                                   
                <div className={classes.form_control_div}>
                    <input readOnly
                    type="percent"
                    id={props.idAlloc}
                    value={props.valueAlloc + "%"}
                    //defaultValue={props.defaultvalueAlloc + "%"}
                    min={0} 
                    />
                </div>
            </td>
        </tr>
    );
};

export default Table_row_details;