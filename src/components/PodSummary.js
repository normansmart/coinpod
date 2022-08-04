import React from "react";
import Pods from "./Pods";


function PodSummary({goal , remove}){


    return(
        <>
        <Pods goal={goal} />
        <div className="pod-controls">

            <button onClick={()=> remove(goal)}> Delete </button>
            <button> Commit </button>

        </div>
        </>
    )

}

export default PodSummary