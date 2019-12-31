import React, { Component } from 'react';
import Card from '../UI/Card'
import classes from './AssessmentQuestionaire.css';
import Button from '../Utilities/Button'
import QuestionCheckBox from '../Utilities/QuestionCheckbox'
import QuestionMultiCheckbox from '../Utilities/QuestionMultiCheckbox'


class AssessmentQuestions extends Component {

    continue = event => {
        event.preventDefault();
        this.props.nextStep();
    }
    goBack = event => {
        event.preventDefault();
        this.props.prevStep();
    }

    render() {
        return (
            <div className={classes.container}>
                <div className={classes.sectionblock}>
                    <Card>
                        <div>
                            <h2>2. Complete the following survey</h2>
                        </div>
                    </Card>
                </div>
                <div className={classes.sectionblock}>
                    <div className={classes.shadow_box}>
                        <Card>
                            <div className={classes.rowHighlights} id="rowHighlights">
                            <QuestionCheckBox 
                            question="Do you have a budget?"
                            stateValue={this.props.stateValues.qAHaveBudget}
                            handleQAChange={this.props.handleQuestionChange('qAHaveBudget')}
                            />
                            <QuestionCheckBox 
                            question="Do you have an Emergency Fund?"
                            stateValue={this.props.stateValues.qAHaveEmergFund}
                            handleQAChange={this.props.handleQuestionChange('qAHaveEmergFund')}
                            />
                            <QuestionCheckBox 
                            question="Do you have *outstanding Debt?"
                            stateValue={this.props.stateValues.qAHaveOutstandingDebt}
                            handleQAChange={this.props.handleQuestionChange('qAHaveOutstandingDebt')}
                            />
                            <QuestionCheckBox 
                            question="Are you saving for Retirement?"
                            stateValue={this.props.stateValues.qASavingToRetire}
                            handleQAChange={this.props.handleQuestionChange('qASavingToRetire')}
                            />
                            <QuestionCheckBox 
                            question="Do you know your Credit Score?"
                            stateValue={this.props.stateValues.qAHaveCheckedCreditScore}
                            handleQAChange={this.props.handleQuestionChange('qAHaveCheckedCreditScore')}
                            />
                            <QuestionCheckBox 
                            question="Do you have a long-term savings?"
                            stateValue={this.props.stateValues.qAHaveLongTrmSavings}
                            handleQAChange={this.props.handleQuestionChange('qAHaveLongTrmSavings')}
                            />
                            <QuestionCheckBox 
                            question="Do you own a house?"
                            stateValue={this.props.stateValues.qAHaveHouse}
                            handleQAChange={this.props.handleQuestionChange('qAHaveHouse')}
                            />
                            <QuestionCheckBox 
                            question="My financial condition allows me to achieve my desired lifestyle?"
                            stateValue={this.props.stateValues.qAGoodFinLifestyle}
                            handleQAChange={this.props.handleQuestionChange('qAGoodFinLifestyle')}
                            />
                            <QuestionMultiCheckbox 
                            question="What are your important Long-term Goals?"
                            questionCategory="qAImportantLTGoals"
                            options={this.props.ltoptions}
                            stateValues={this.props.stateValues.qAImportantLTGoals}
                            handleQAChange={this.props.handleQuestionMultiChange}
                            />
                            <QuestionMultiCheckbox 
                            question="What are your Short-term Goals, next year?"
                            questionCategory="qAImportantSTGoals"
                            options={this.props.stoptions}
                            stateValues={this.props.stateValues.qAImportantSTGoals}
                            handleQAChange={this.props.handleQuestionMultiChange}
                            />
                            </div>
                        </Card>  
                    </div>  
                </div>
                <div className={classes.sectionblock}>
                    <div className={classes.shadow_box}>
                        <Card>
                       
                        <div className={classes.button_div}>
                            <Button clicked={this.goBack}>Previous Step</Button>
                            <Button clicked={this.continue}>Next Step</Button>
                        </div>
                        <div className={classes.cleaner}></div>
                        </Card>
                    </div>
                </div>
            </div>
        );
    }
}

export default AssessmentQuestions;