import React, { useState } from 'react';
import FormLoanInputs from '../components/FormLoanInputs'
import AmortCalcResults from '../components/AmortCalcResults';

const AmortCalculator = () => {
    const [calcDataValues, setCalcDataValues] = useState([]);
    
    const dataInputsHandler = dataValues => {
        setCalcDataValues(dataValues)
    }
    
    return (
        <div>
            <FormLoanInputs dataInputHandler = {dataInputsHandler}/>
            <div>
                <AmortCalcResults dataValues={calcDataValues}/>
            </div>
        </div>
    );
};

export default AmortCalculator;