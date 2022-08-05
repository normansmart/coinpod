import React from "react";
import '../dashboard.css'
import DashboardGoalTab from "./DashBoardGoalsTabs";
import TopBar from "./TopBar";


const DashBoard = ({ user, banks, goals }) => {

    const funds = banks.map(
        (item) => {
            return item.balance
        }
    )

    const fundSum = funds.reduce((a, b) => a + b, 0)


    const goalTabs = goals.map(
        item => {

            return (

                <div className="goal-tabs" key={item.id} >

                    <div className="tab-background"  >
                        <DashboardGoalTab key={item.id} goal={item} />
                    </div>
                    <h3 className="goal-name">
                        {item.name}
                    </h3>

                </div>
            )

        }
    )







    return (
        <>
            <div className="dashboard-container">

                <TopBar user={user} fundSum={fundSum} />

                <div className="goals-summary-container">

                    {goalTabs}

                </div>


                <div className="timeline-chart-container">

                </div>


            </div>


        </>
    )
}



export default DashBoard