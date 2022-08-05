import React, { useEffect, useState } from "react";
import TopBar from "./TopBar";
import Pods from "./Pods";
import PodInfo from "./PodInfo";
import '../podspage.css'

const PodsPage = ({ user, banks, goals }) => {

    const [SelectedPod, setSelectedPod] = useState({})






    function handleSelect(item) {
        // put ternary in here
        setSelectedPod(item)

    }


   

    function PodUpdate(e) {

        e.preventDefault()



        const transfterAmount = e.target.transfer.value

        const currentAmount = SelectedPod.current

        const totalTransfer = currentAmount + transfterAmount



        console.log(e)


        fetch(`http://localhost:3000/goals/${SelectedPod.id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                current: totalTransfer,
            }),
        })
            .then(r => r.json())
            .then(setSelectedPod)



    }








    function handleDeleteClick() {
        fetch(`http://127.0.0.1:3000/goals/${SelectedPod.id}`, {
            method: "DELETE"
        })


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

                    <PodInfo goal={SelectedPod} remove={handleDeleteClick} banks={banks} handleUpdate={PodUpdate} />

                </div>


                <div className="controller-container">

                </div>

            </div>
        </>
    )
}

export default PodsPage