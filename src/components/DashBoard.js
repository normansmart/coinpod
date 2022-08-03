import React from "react";
import '../dashboard.css'
import DashboardGoalTab from "./DashBoardGoalsTabs";
const DashBoard = ({ user, banks, goals }) => {




    const funds = banks.map(
        (item) => {
            return item.balance
        }
    )


    const fundSum = funds.reduce((a, b) => a + b, 0)


    console.log(fundSum)


    const goalTabs = goals.map(
        item => {

            return (
                <>
                    <div className="tab-background" key={item.id}> 
                    <DashboardGoalTab key={item.id} goal={item} />
                    </div>
                </>

            )

        }
    )







    return (
        <>
            <div className="dashboard-container">
                <div className="top-bar">

                    <h2 className="title"> Hello, {user.username} </h2>

                    <div className="funds-container">
                        <h3> Funds </h3>
                        <h2> {fundSum} </h2>
                    </div>

                </div>


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