import React from "react";
import TopBar from "./TopBar";
import Pods from "./Pods";
import '../podspage.css'

const PodsPage = ({ user, banks , goals}) => {


    const funds = banks.map(
        (item) => {
            return item.balance
        }
    )

        const goalList = goals.map(
            item =>{
                return(
                    <Pods goal={item} />
                )
            }
        )




    const fundSum = funds.reduce((a, b) => a + b, 0)

    return (
        <>
            <div className="pod-page-container">

                <TopBar user={user} fundSum={fundSum} />


                <div className="goal-container">
                    {goalList}
                </div>


                <div className="history-container"> 

                </div>

            </div>
        </>
    )
}

export default PodsPage