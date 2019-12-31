import React from 'react';
import classes from './FormLoanInputs.css'

const AmortCalcResults = ( props ) => {
    return (
        <section className={classes.result_list}>
            <h2>Results</h2>
            <ul>
                {props.dataValues.map(ig => (
                <li key={ig.title}>
                    <span>{ig.title}: </span>
                    <span>{ig.value}</span>
                </li>
                ))}
            </ul>
        </section>
    );
};

export default AmortCalcResults;