import React from "react";
import Pods from "./Pods";
import PodSummary from "./PodSummary";

function PodInfo({goal , remove}){
    



    return(
        <>
    <PodSummary goal={goal} remove={remove} />
        

        </>
    )
}

export default PodInfo