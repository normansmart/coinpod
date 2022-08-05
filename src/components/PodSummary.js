import React from "react";
import Pods from "./Pods";


function PodSummary({ goal, remove, banks , handleUpdate }) {


console.log(goal)


    const bankOptions = banks.map(
        item => {
            return (
                <option key={item.id} > {item.name} </option>
            )
        }
    )

    return (
        <>
            <div className="pod-holder">
                <Pods goal={goal} />
                <div className="pod-controls">
                    <button className="control-button" onClick={() => remove(goal)}> Delete </button>
                    <button className="control-button" > Make Commit </button>
                </div>
            </div>


            <div className="transfer-form-container">
                <form onSubmit={(e )=> handleUpdate(e)} >
                    <label>Transfer Amount</label>
                    <input id="transfer-input" type="text" name="transfer" />
                    <p> FROM </p>

                    <select id="bank-selector" name="banks" >
                        {bankOptions}

                    </select>

                    <button id="commit-button"
                        type="submit"
                        name="submit">
                        COMMIT </button>

                </form>
            </div>


        </>
    )

}

export default PodSummary