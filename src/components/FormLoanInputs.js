import React, { useState } from 'react';
import Card from '../components/UI/Card';
import classes from './FormLoanInputs.css';

const FormLoanInputs = ( props ) => {
    const [enteredTerm, setenteredTerm] = useState('');
    const [enteredInterestRate, setenteredInterestRate] = useState('');
    const [enteredLoanAmount, setenteredLoanAmount] = useState('');
    //const [calcPymtAmount, setcalcPymtAmount] = useState('');
    
    const calculateHandler = event => {
        event.preventDefault();
        props.dataInputHandler(() => {
            let calcPymtAmount = calculatePymt();
            let calcDataValues = [
            { title: 'Loan Amount', value: enteredLoanAmount },
            { title: 'Interest Rate', value: enteredInterestRate },
            { title: 'Term', value: enteredTerm },
            { title: 'Monthly Payment', value: calcPymtAmount }
            ]
            
            return calcDataValues;
        })
    };

    const calculatePymt = () => {
        //new Promise((resolve, reject) => {
            let numberMonthlyPayments = enteredTerm * 12;
            console.log(numberMonthlyPayments)
            let periodicInterestRate = enteredInterestRate / 12 / 100; //ex. 6% is .06 divided by 12 = .005
            console.log(periodicInterestRate)
            let step1 = (Math.pow((1+periodicInterestRate),numberMonthlyPayments) - 1)
            let step2 = (periodicInterestRate * Math.pow((1+periodicInterestRate),numberMonthlyPayments))
            console.log(step1 + ' ' + step2)
            let discountFactor = ((Math.pow((1+periodicInterestRate),numberMonthlyPayments) - 1) /
                (periodicInterestRate * Math.pow((1+periodicInterestRate),numberMonthlyPayments)));
            console.log(discountFactor)
            //setcalcPymtAmount((enteredLoanAmount/discountFactor).toFixed(2));

            //resolve((enteredLoanAmount/discountFactor).toFixed(2));
        return (enteredLoanAmount/discountFactor).toFixed(2)
    }

    return (
        <section className={classes.loan_form}>
          <Card>
            <form onSubmit={calculateHandler}>
              <div className={classes.form_control}>
                <label htmlFor="loanAmount">Loan Amount</label>
                <span>$</span>
                <div className={classes.form_control_div}>
                    <input
                    type="number"
                    id="loanAmount"
                    value={enteredLoanAmount}
                    onChange={event => {
                        setenteredLoanAmount(event.target.value);
                    }}
                    />
                </div>
              </div>
              <div className={classes.form_control}>
                <label htmlFor="interestRate">Interest Rate</label>
                <span>%</span>
                <div className={classes.form_control_div}>
                    <input
                    type="number"
                    id="interestRate"
                    value={enteredInterestRate}
                    onChange={event => {
                        setenteredInterestRate(event.target.value);
                    }}
                    />
                </div>
              </div>
              <div className={classes.form_control}>
                <label htmlFor="term">Term (Yrs)</label>
                <span></span>
                <div className={classes.form_control_div}>
                    <input
                    type="number"
                    id="term"
                    value={enteredTerm}
                    onChange={event => {
                        setenteredTerm(event.target.value);
                    }}
                    />
                </div>
              </div>
              <div className={classes.form_actions}>
                <button type="submit">Calculate</button>
              </div>
            </form>
          </Card>
        </section>
      );
}

export default FormLoanInputs;