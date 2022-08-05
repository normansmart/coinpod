import React from "react";

function Pods({goal , handleSelect}) {


    const diff = (goal.current / goal.goal_amount) * 100

    return (
        <div className="pod-container" onClick={()=> handleSelect(goal)}>

            <div className="goal-tracker" style={{ height: `${diff}%` }}></div>
          

            <h1 className="goal-name"> {goal.name} </h1>

            <div className="goal-info">

            <h3> {goal.current}    </h3> 
            <h2> / {goal.goal_amount} </h2> 
            
            </div>

        </div>
    )
}


export default Pods