import React, { Component } from 'react';
import Card from '../UI/Card';
import Button from '../Utilities/Button';
import classes from './AssessmentQuestionaire.css';
import classesBudget from './AssessmentBudget.css';
import CreateULItemsTwoArrays from '../Utilities/CreateULItemsTwoArrays';
import AssessmentRec from '../Assessment/AssessmentRecommendations';

class AssessmentReview extends Component {
    state = {
        // recBudget: false,
        // recEmergencyFund: false,
        // recDebt: false,
        // recSavings: false,
        // recRetirement: false,
        // recMortgage: false,
        // recInvestments: false,
        assessmentScore: 0,
        budgetAllocScore: 0,
        recOptions: []
    };



    calculateScore = () => {
        //variables
        let points = 0  //max 45
        let budgetScore = 0
        
        //Calculate score
        //Budget is over/under
        if(this.props.stateValues.budgetAmtRemaining >= 0) {
            points += 5
        } else {
            let deviationBudgeted = (this.props.stateValues.budgetAmtRemaining/this.props.stateValues.income)
            if(deviationBudgeted > -0.15) {
                points += 3
            }
        } // 0 points for <= -0.15
        
        //Budget Need Allocation
        let deviationNeedAlloc = (this.props.stateValues.totalNeedBudgetAlloc-50)
        if(deviationNeedAlloc < 5) {
            points += 5;
            budgetScore += 5;
        } else {
            if(deviationNeedAlloc < 15) {
                points += 3;
                budgetScore += 3;
            }
        }// 0 points for > 15 percent points different
        
        //Budget Savings/Debt Allocation
        let deviationSavDebtAlloc = (this.props.stateValues.totalSavDebtBudgetAlloc-20)
        if(deviationSavDebtAlloc < 5) {
            points += 5;
            budgetScore += 5;
        } else {
            if(deviationSavDebtAlloc < 15) {
                points += 3;
                budgetScore += 3;
            }
        }// 0 points for > 15 percent points different        
        
        //Budget Want Allocation
        let deviationWantAlloc = (this.props.stateValues.totalWantBudgetAlloc-30)
        if(deviationWantAlloc < 5) {
            points += 5;
            budgetScore += 5;
        } else {
            if(deviationWantAlloc < 15) {
                points += 3;
                budgetScore += 3;
            }
        }// 0 points for > 15 percent points different   
        
        //Has Emergency Fund
        if(this.props.stateValues.qAHaveEmergFund) {
            points += 5
        }
        //Outstanding Debt
        if(!this.props.stateValues.qAHaveOutstandingDebt) {
            points += 5
        }
        //Saving for Retirement
        if(this.props.stateValues.qASavingToRetire) {
            points += 5
        }
        //Checked Credit Score Recently
        if(this.props.stateValues.qAHaveCheckedCreditScore) {
            points += 5
        }
        //Has Long-term Savings
        if(this.props.stateValues.qAHaveLongTrmSavings) {
            points += 5
        }

        //set points with 45 being the max. Percent format 44.56%)
        this.setState({assessmentScore: Number((points/45*100).toFixed(2))})
        this.setState({budgetAllocScore: budgetScore})
        console.log(points)
    }

    recommendations = () => {
        //Reset Recommendation Array
        this.setState({recOptions: []})
        let recArray = []
        
        //OwnHouse
        if(!this.props.stateValues.qAHaveHouse) {
            recArray.push({Text: "Save for a House", URL: "/savings/mortgage"})
        }
        //Budget is Overbudgeted  <0 means they are overbudgeted OR Budget Allocation is off
        if(this.props.stateValues.budgetAmtRemaining < 0 || this.state.budgetAllocScore !== 15) {
            recArray.push({Text: "Create/Revisit Budget", URL: "/budget"})
        }
        console.log(recArray)
        //Emergency Fund issues
        if(!this.props.stateValues.qAHaveEmergFund) {
            recArray.push({Text: "Contribute to an Emergency Fund", URL: "/savings"})
        }
        //Has Outstanding Debt recDebt, else recInvestments
        if(this.props.stateValues.qAHaveOutstandingDebt) {
            recArray.push({Text: "Reduce outstanding Debt", URL: "/debt"})
        } else {
            recArray.push({Text: "Start Investing", URL: "/investments"})
        }
        //No Retirement
        if(!this.props.stateValues.qASavingToRetire) {
            recArray.push({Text: "Contribute to Retirement", URL: "/investments/retirement"})
        }
        //Has Long-term Savings
        if(!this.props.stateValues.qAHaveLongTrmSavings) {
            recArray.push({Text: "Contribute to long-term savings", URL: "/savings"})
        }

        //Update State
        this.setState({recOptions: recArray})
    }
    
    exit = event => {
        event.preventDefault();
        // this.props.nextStep();
        //link to home
    }
    goBack = event => {
        event.preventDefault();
        this.props.prevStep();
    }

    componentDidMount() {
        this.calculateScore();
        this.recommendations();
    }
    
    render() {

        return (
            <div className={classes.container}>
                <div className={classes.sectionblock}>
                    <Card>
                        <div>
                            <h2>3. Review your Assessment and Recommendations</h2>
                        </div>
                    </Card>
                </div>
                <div className={classes.sectionblock}>
                    <Card>
                        <div>
                            <h2>Summary</h2>
                        </div>
                        <div className={classesBudget.form_control}>
                            <label>Score<br></br><span className={classesBudget.small_font}></span></label>
                            <div className={classesBudget.form_control_div}>
                                <input
                                min={0}
                                type="percent"
                                id="score"
                                value={this.state.assessmentScore + "%"}
                                readOnly
                                />
                            </div>
                        </div>
                        <div className={classesBudget.table_section}>
                            <div>
                                <h2>Your Goals</h2>
                            </div>
                            <p>You have stated that you'd like to:</p>
                                <CreateULItemsTwoArrays 
                                stateLTGoals={this.props.stateValues.qAImportantLTGoals}
                                stateSTGoals={this.props.stateValues.qAImportantSTGoals}
                                ltoptions={this.props.ltoptions}
                                stoptions={this.props.stoptions}
                                />
                            <p>Based on your goals and score, below are some recommendations to improve and become financially savvy</p>
                        </div>
                        <div className={classesBudget.table_section}>
                            {/* Recommendations */}
                            <div>
                                <h2>Recommendations</h2>
                            </div>
                            <div>
                                <AssessmentRec 
                                recOptions={this.state.recOptions}
                                />
                            </div>
                        </div>
                    </Card>
                </div>
                <div className={classes.sectionblock}>
                    <div className={classes.shadow_box}>
                        <Card>
                       
                        <div className={classes.button_div}>
                            <Button clicked={this.goBack}>Previous Step</Button>
                            <Button clicked={this.exit}>Exit</Button>
                        </div>
                        <div className={classes.cleaner}></div>
                        </Card>
                    </div>
                </div>
            </div>
        );
    }
}

export default AssessmentReview;