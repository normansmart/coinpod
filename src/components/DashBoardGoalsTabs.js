import React from "react";


function DashboardGoalTab({ goal }) {


    const diff = (goal.current / goal.goal_amount) * 100


    return (
        <>
            <div className="goal-dash-tabs" style={{ height: `${diff}%` }}>
              
            </div>
            
        </>
    )
}

export default DashboardGoalTab