import React, { Component } from 'react';
import Card from '../UI/Card'
import classes from './AssessmentBudget.css';
import TableRowDetails from '../Utilities/Table_row_details'
import Button from '../Utilities/Button'

class AssessmentBudget extends Component {
    continue = event => {
        event.preventDefault();
        this.props.nextStep();
    }
    
    render() {
        const { handleStateChange } = this.props;

        return (
            <div className={classes.container}>
                <section className={classes.sectionblock}>
                <Card>
                    <div>
                        <h2>1. Complete the form below on how much you spend monthly</h2>
                    </div>
                </Card>
                </section>
                <section className={classes.sectionblock}>
                <Card>
                    <div>
                        <h2>Income</h2>
                    </div>
                    <div className={classes.form_control}>
                        <label>Income (Monthly)<br></br><span className={classes.small_font}>(take home income)</span></label>
                        <div className={classes.form_control_div}>
                            <input
                            min={0}
                            type="number"
                            id="incomeAmount"
                            value={((this.props.stateValues.income === 0) ? "" : this.props.stateValues.income)}
                            onChange={handleStateChange('income')}
                            placeholder={0}
                            />
                        </div>
                    </div>
                    <div className={classes.table_section}>
                        <table>
                            <tbody>
                            <tr className={classes.table_header}>
                                <th>Category</th>
                                <th>$ Amount</th>
                                <th>% Allocation</th>
                            </tr>
                            <TableRowDetails 
                                category="Housing"
                                categoryNote="(Mortgage, Rent, Utilities, Prop.Taxes)"
                                idInput="housingBudget"
                                idAlloc="housingAlloc"
                                handleStateChange={this.props.handleStateChange('housingBudget')}
                                valueInput={this.props.stateValues.housingBudget}
                                valueAlloc={this.props.stateValues.housingBudgetAlloc}
                                
                            />
                            <TableRowDetails 
                                category="Healthcare"
                                categoryNote="(premiums, drugs)"
                                idInput="healthcareBudget"
                                idAlloc="healthcareAlloc"
                                handleStateChange={this.props.handleStateChange('healthcareBudget')}
                                valueInput={this.props.stateValues.healthcareBudget}
                                valueAlloc={this.props.stateValues.healthcareBudgetAlloc}
                                min={0}
                            />
                            <TableRowDetails 
                                category="Food"
                                categoryNote="(Groceries, not Dining)"
                                idInput="foodBudget"
                                idAlloc="foodAlloc"
                                handleStateChange={this.props.handleStateChange('foodBudget')}
                                valueInput={this.props.stateValues.foodBudget}
                                valueAlloc={this.props.stateValues.foodBudgetAlloc}
                                min={0}
                            />
                            <TableRowDetails 
                                category="Insurance"
                                categoryNote="(Home, auto, personal)"
                                idInput="insuranceBudget"
                                idAlloc="insuranceAlloc"
                                handleStateChange={this.props.handleStateChange('insuranceBudget')}
                                valueInput={this.props.stateValues.insuranceBudget}
                                valueAlloc={this.props.stateValues.insuranceBudgetAlloc}
                                min={0}
                            />
                            <TableRowDetails 
                                category="Transportation"
                                categoryNote="(Gas, Bus pass, not financed Automobile)"
                                idInput="transportationBudget"
                                idAlloc="transportationAlloc"
                                handleStateChange={this.props.handleStateChange('transportationBudget')}
                                valueInput={this.props.stateValues.transportationBudget}
                                valueAlloc={this.props.stateValues.transportationBudgetAlloc}
                                min={0}
                            />
                            <TableRowDetails 
                                category="Savings"
                                categoryNote="(Vacation, Emergency Fund)"
                                idInput="savingsBudget"
                                idAlloc="savingsAlloc"
                                handleStateChange={this.props.handleStateChange('savingsBudget')}
                                valueInput={this.props.stateValues.savingsBudget}
                                valueAlloc={this.props.stateValues.savingsBudgetAlloc}
                                min={0}
                            />
                            <TableRowDetails 
                                category="Retirement Savings"
                                categoryNote="(extra to what employers may take out)"
                                idInput="retirementBudget"
                                idAlloc="retirementAlloc"
                                handleStateChange={this.props.handleStateChange('retirementBudget')}
                                valueInput={this.props.stateValues.retirementBudget}
                                valueAlloc={this.props.stateValues.retirementBudgetAlloc}
                                min={0}
                            />
                            <TableRowDetails 
                                category="Debt Payment"
                                categoryNote="(Auto Loan, Student Loan, personal Loan)"
                                idInput="debtPymtBudget"
                                idAlloc="debtPymtAlloc"
                                handleStateChange={this.props.handleStateChange('debtPymtBudget')}
                                valueInput={this.props.stateValues.debtPymtBudget}
                                valueAlloc={this.props.stateValues.debtPymtBudgetAlloc}
                                min={0}
                            />
                            <TableRowDetails 
                                category="Clothing"
                                categoryNote=""
                                idInput="clothingBudget"
                                idAlloc="clothingAlloc"
                                handleStateChange={this.props.handleStateChange('clothingBudget')}
                                valueInput={this.props.stateValues.clothingBudget}
                                valueAlloc={this.props.stateValues.clothingBudgetAlloc}
                                min={0}
                            />
                            <TableRowDetails 
                                category="Entertainment"
                                categoryNote=""
                                idInput="entertainmentBudget"
                                idAlloc="entertainmentAlloc"
                                handleStateChange={this.props.handleStateChange('entertainmentBudget')}
                                valueInput={this.props.stateValues.entertainmentBudget}
                                valueAlloc={this.props.stateValues.entertainmentBudgetAlloc}
                                min={0}
                            />
                            <TableRowDetails 
                                category="EatingOut/Dining"
                                categoryNote=""
                                idInput="diningBudget"
                                idAlloc="diningAlloc"
                                handleStateChange={this.props.handleStateChange('diningBudget')}
                                valueInput={this.props.stateValues.diningBudget}
                                valueAlloc={this.props.stateValues.diningBudgetAlloc}
                                min={0}
                            />
                            <TableRowDetails 
                                category="MiscBudget"
                                categoryNote=""
                                idInput="miscBudget"
                                idAlloc="miscAlloc"
                                handleStateChange={this.props.handleStateChange('miscBudget')}
                                valueInput={this.props.stateValues.miscBudget}
                                valueAlloc={this.props.stateValues.miscBudgetAlloc}
                                min={0}
                            />
                            </tbody>
                        </table>
                    </div>
                    <div className={classes.table_section}>
                        <table>
                            <tbody>
                            <TableRowDetails 
                                category="Need Total"
                                categoryNote=""
                                idInput="need"
                                idAlloc="needAlloc"
                                valueInput={this.props.stateValues.totalNeedBudget}
                                valueAlloc={this.props.stateValues.totalNeedBudgetAlloc}
                            />
                            <TableRowDetails 
                                category="Saving/Debt Total"
                                categoryNote=""
                                idInput="saving"
                                idAlloc="savingAlloc"
                                valueInput={this.props.stateValues.totalSavDebtBudget}
                                valueAlloc={this.props.stateValues.totalSavDebtBudgetAlloc}
                            />
                            <TableRowDetails 
                                category="Want Total"
                                categoryNote=""
                                idInput="want"
                                idAlloc="wantAlloc"
                                valueInput={this.props.stateValues.totalWantBudget}
                                valueAlloc={this.props.stateValues.totalWantBudgetAlloc}
                            />
                            </tbody>
                        </table>
                    </div>
                    <div className={classes.table_section}>
                        <div>
                            <h2>Summary</h2>
                        </div>
                        <div className={classes.form_control}>
                            <label>Budgeted Incoming Remaining<br></br><span className={classes.small_font}></span></label>
                            <div className={classes.form_control_div}>
                                <input readOnly
                                type="number"
                                id="budgetAmtRemaining"
                                value={this.props.stateValues.budgetAmtRemaining}
                                // value={() => {
                                //     let number = Number(this.props.stateValues.budgetAmtRemaining)
                                //     if(number < 0) {
                                //         return number.toString.fontcolor("red");
                                //     } else {
                                //         return number
                                //     }
                                //     }
                                // }
                                placeholder={0}
                                />
                            </div>
                        </div>
                    </div>
                </Card>
                </section>
                <section className={classes.sectionblock}>
                <Card>
                    <div className={classes.button_div}>
                        <Button clicked={this.continue}>Next Step</Button>
                    </div>
                    <div className={classes.cleaner}></div>
                </Card>
                </section>
            </div>
        );
    }
}

export default AssessmentBudget;