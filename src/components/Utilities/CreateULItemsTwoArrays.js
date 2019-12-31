import React from 'react';

const CreateULItems = ( props ) => {
    const allGoalObj = {...props.stateLTGoals, ...props.stateSTGoals};
    const allOptionsArray = [...props.ltoptions, ...props.stoptions];
    let arrayToDisplay = []

    //For every allGoalObj that is TRUE, link to the allOptionsArray to return the OPTION field to an array, join on StateName.
    const getTrueOptions = (allGoalObj, allOptionsArray) => {
        for (var obj in allGoalObj) {
            //find if the obj's state was TRUE
            if(allGoalObj[obj]) {
            //find OPTION in allOptionsArray joining on the StateName
                for (var element in allOptionsArray) {
                    if(allOptionsArray[element].StateName === obj) {
                        arrayToDisplay.push(allOptionsArray[element].Option)
                    }
                }
            }
        };
    }

    getTrueOptions(allGoalObj, allOptionsArray);

    return (
        <div>
            <ul>
                {arrayToDisplay.map(goal => (
                    <li key={goal} >{goal}</li>
                ))}
            </ul>
        </div>
    );
};

export default CreateULItems;