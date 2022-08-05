import React from "react";
import Pods from "./Pods";
import PodSummary from "./PodSummary";
import PodCommits from "./PodCommits";

function PodInfo({goal , remove , banks , handleUpdate}){
    



    return(
        <div className="pod-info-container">
    <PodSummary goal={goal} remove={remove} banks={banks} handleUpdate={handleUpdate} />
        <PodCommits />

        </div>
    )
}

export default PodInfo