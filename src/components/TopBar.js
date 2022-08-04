import React from "react";


function TopBar({user , fundSum}){

    return(

        <div className="top-bar">

        <h2 className="title"> Hello, {user.username} </h2>

        <div className="funds-container">
            <h3> Funds </h3>
            <h2> {fundSum} </h2>
        </div>

    </div>
    )
}

export default TopBar