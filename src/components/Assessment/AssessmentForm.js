import React, { Component } from 'react';
import AssessmentBudget from './AssessmentBudget';
import AssessmentQuestions from './AssessmentQuestions';
import AssessmentReview from './AssessmentReview';

class AssessmentForm extends Component {
    state = {
        step: 1,
        income: 0,
        incomeTerm: '',
        housingBudget: 0,
        housingBudgetAlloc: 0,
        healthcareBudget: 0,
        healthcareBudgetAlloc: 0,
        foodBudget: 0,
        foodBudgetAlloc: 0,
        insuranceBudget: 0,
        insuranceBudgetAlloc: 0,
        transportationBudget: 0,
        transportationBudgetAlloc: 0,
        totalNeedBudget: 0,
        totalNeedBudgetAlloc: 0,
        savingsBudget: 0,
        savingsBudgetAlloc: 0,
        retirementBudget: 0,
        retirementBudgetAlloc: 0,
        debtPymtBudget: 0,
        debtPymtBudgetAlloc: 0,
        totalSavDebtBudget: 0,
        totalSavDebtBudgetAlloc: 0,
        clothingBudget: 0,
        clothingBudgetAlloc: 0,
        entertainmentBudget: 0,
        entertainmentBudgetAlloc: 0,
        diningBudget: 0,
        diningBudgetAlloc: 0,
        miscBudget: 0,
        miscBudgetAlloc: 0,
        totalWantBudget: 0,
        totalWantBudgetAlloc: 0,
        budgetAmtRemaining: 0,

        qAHaveBudget: false,
        qAHaveEmergFund: false,
        qAEmergFundAmt: 0,
        qAHaveOutstandingDebt: false,
        qAOutstandingDebtAmt: 0,
        qASavingToRetire: false,
        qARetireSavingPerMonth: false,
        qAHaveCheckedCreditScore: false,
        qAHaveLongTrmSavings: false,
        qAHaveHouse: false,
        qAGoodFinLifestyle: false,
        qAImportantLTGoals: {
            SaveRetirement: false,
            BuyHouse: false,
            SaveCollege: false,
            DebtFree: false,
            InvestMoney: false
        },
        qAImportantSTGoals: {
            PayOffLoan: false,
            LiveComfortably: false,
            StartFamily: false,
            SaveTowardsSomething: false
        }
    };

    LToptions=[
        {Option: 'Save for Retirement',StateName: 'SaveRetirement'},
        {Option: 'Buy a House',StateName: 'BuyHouse'},
        {Option: 'Save for Children/s College',StateName: 'SaveCollege'},
        {Option: 'Become Debt Free',StateName: 'DebtFree'},
        {Option: 'Invest Money',StateName: 'InvestMoney'}
    ]
    
    SToptions=[
        {Option: 'Pay off a Loan',StateName: 'PayOffLoan'},
        {Option: 'Live comfortably',StateName: 'LiveComfortably'},
        {Option: 'Start a family',StateName: 'StartFamily'},
        {Option: 'Save towards something',StateName: 'SaveTowardsSomething'},
    ]
    
    nextStep = () => {
        const { step } = this.state;
        this.setState({
            step: step + 1
        })
    }

    prevStep = () => {
        const { step } = this.state;
        this.setState({
            step: step - 1
        })
    }

    handleStateChange = input => event => {
        const inputStr = input + "Alloc"
        if(this.state.income !== 0) {
            
        const percAlloc = Number((event.target.value / this.state.income * 100).toFixed(2));

        this.setState({[inputStr]: percAlloc});
        } else {
            this.setState({[inputStr]: 0});;
        };
        //callback updates for Aggregate categories and Budget Remaining
        this.setState({[input]: Number(event.target.value)},() => {this.handleAggStateChange(); this.forceUpdate();}); 
    }

    handleAggStateChange = () => {
        let totNeed = 0;
        let totSavDebt = 0;
        let totWant = 0;

        totNeed = (this.state.housingBudget + this.state.healthcareBudget + this.state.foodBudget + this.state.insuranceBudget + this.state.transportationBudget)
        totSavDebt = this.state.savingsBudget + this.state.retirementBudget + this.state.debtPymtBudget
        totWant = this.state.clothingBudget + this.state.entertainmentBudget + this.state.diningBudget + this.state.miscBudget

        if(this.state.income !== 0) {
            //Total Need
            if(totNeed !== 0) {
            const percAllocNeed = Number((totNeed / this.state.income * 100).toFixed(2));
            this.setState({totalNeedBudgetAlloc: percAllocNeed})
            this.setState({totalNeedBudget: totNeed})
            }
            //Total SavingDebt
            if(totSavDebt !== 0) {
            const percAllocSavDebt = Number((totSavDebt / this.state.income * 100).toFixed(2));
            this.setState({totalSavDebtBudgetAlloc: percAllocSavDebt})
            this.setState({totalSavDebtBudget: totSavDebt})
            }
            //Total Want
            if(totWant !== 0) {
            const percAllocWant = Number((totWant / this.state.income * 100).toFixed(2));
            this.setState({totalWantBudgetAlloc: percAllocWant})
            this.setState({totalWantBudget: totWant})
            }
        }
        this.setState({budgetAmtRemaining: (this.state.income - (totNeed + totSavDebt + totWant))})
    }

    handleQuestionChange = input => event => {
        this.setState({[input]: event.target.checked})
    }
    handleQuestionMultiChange = (input, questionCategory) => event => {
        const multiQuestionState = {...this.state[questionCategory]}
        multiQuestionState[input] = event.target.checked;
            this.setState({[questionCategory]: multiQuestionState});
    } 

    render() {
        const { step } = this.state;
        const stateValues = { ...this.state }

        switch(step) {
            case 1: 
            return (
                <AssessmentBudget 
                nextStep = {this.nextStep}
                handleStateChange = {this.handleStateChange}
                stateValues={stateValues}
                />
            )
            case 2:
            return (
                <AssessmentQuestions
                nextStep = {this.nextStep}
                prevStep = {this.prevStep}
                stateValues={stateValues}
                ltoptions={this.LToptions}
                stoptions={this.SToptions}
                handleQuestionChange={this.handleQuestionChange}
                handleQuestionMultiChange={this.handleQuestionMultiChange}
                />
            )
            case 3:
            return (
                <AssessmentReview
                prevStep = {this.prevStep}
                stateValues={stateValues}
                ltoptions={this.LToptions}
                stoptions={this.SToptions}
                />
            )
        }
    }
}

export default AssessmentForm;