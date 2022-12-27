import SummaryView from "../view/summaryView";
import React from "react";


export default function SummaryPresenter(props){
    const [age, setAge] = React.useState(props.model.person.age);
    const [weight, setWeight] = React.useState(props.model.person.weight);
    const [height, setHeight] = React.useState(props.model.person.height);
    const [gender, setGender] = React.useState(props.model.person.gender);
    const [goal, setGoals] = React.useState(props.model.currentGoal);
    const [diet, setDiet] = React.useState(props.model.currentDiet);
    const [bmi, setBmi] = React.useState(props.model.currentBmi);
    const [activityLevel, setActivityLevel] = React.useState(props.model.currentActivityLevel);




    function observerACB(){
        setAge(props.model.person.age);
        setWeight(props.model.person.weight);
        setHeight(props.model.person.height);
        setGender(props.model.person.gender);
        setBmi(props.model.currentBmi.bmi);
        setGoals(props.model.currentGoal.weightGoal);
        setDiet(props.model.currentDiet.protein);
        setActivityLevel(props.model.currentActivityLevel);
    }

    function removeInfo(){
        props.model.removeUserDiet(); 
        props.model.removeUserBmi(); 
        props.model.removeUserGoal(); 
        props.model.removeUserActivity(); 
    }

    function removeGoalsInfo(){
    props.model.removeUserGoal(); 
    }

    function removeDietInfo(){
        props.model.removeUserDiet(); 
    }

    function removeBmiInfo(){
        props.model.removeUserBmi(); 
    }

    function removeActivityInfo(){
        props.model.removeUserActivity(); 
    }

    function wasCreatedACB() {
        props.model.addObserver(observerACB);
        return function isTakenDownACB() {                                
            props.model.removeObserver(observerACB);
        };
    }

    React.useEffect(wasCreatedACB, []);

    return (
        <div className="summary-mainStyle">
            
            <div>
                <SummaryView
                    age = {props.model.person.age}
                    gender = {props.model.person.gender}
                    height = {props.model.person.height}
                    weight = {props.model.person.weight}
                    goal= {props.model.currentGoal}
                    diet= {props.model.currentDiet}
                    bmi = {props.model.currentBmi}
                    activityLevel = {props.model.currentActivityLevel}
                    removeUserInfo= {removeInfo}
                    removeUserGoal= {removeGoalsInfo}
                    removeUserDiet= {removeDietInfo}
                    removeUserBmi= {removeBmiInfo}
                    removeUserActivity= {removeActivityInfo}
                />
            </div>
           
        </div>
            )
}