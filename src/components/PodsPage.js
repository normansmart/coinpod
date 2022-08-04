import React, { useState } from "react";
import TopBar from "./TopBar";
import Pods from "./Pods";
import PodInfo from "./PodInfo";
import '../podspage.css'

const PodsPage = ({ user, banks, goals }) => {

    const [SelectedPod, setSelectedPod] = useState({})
    const [PodSetter , setPodSetter] = useState(false)





    function handleSelect(item) {

        setSelectedPod(item)
        console.log(item)
    }



    function handleDeleteClick(item) {
        fetch(`http://127.0.0.1:3000/goals/${item.id}`, {
            method: "DELETE"
        })

        setPodSetter(!PodSetter)
    }



    const funds = banks.map(
        (item) => {
            return item.balance
        }
    )

    const goalList = goals.map(
        item => {
            return (
                <Pods goal={item} handleSelect={handleSelect} />
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
                    <PodInfo goal={SelectedPod} remove={handleDeleteClick} />

                </div>


                <div className="controller-container">

                </div>

            </div>
        </>
    )
}

export default PodsPage