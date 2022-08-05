import React from "react";
// import { Link, useMatch, useResolvedPath } from "react-router-dom";

export default function Navbar({ currentUserId, logout }) {

  function LogoutButton({ currentUserId, logout }) {
    if (currentUserId) {
      return <button className="logout-button" onClick={logout}>Logout</button>
    }
    else {
      return <></>
    }
  }

  return (
  
    <nav className="nav">
      <div>
        <h1>💰 CoinPod</h1>
        <LogoutButton currentUserId={currentUserId} logout={logout}/>
        {/* <img className="nav-logo" src="" alt=""></img> */}
      
      {/* <Link to="/" className="site-title">CoinPod</Link> */}
      </div>
        <ul>
          {/* <CustomLink to="/stockpage">Home</CustomLink>
          <CustomLink to="/watchlist">App</CustomLink>
          <CustomLink to="/stockdetails">Details</CustomLink> */}
        </ul>
    </nav>

  )
}

// function CustomLink({ to, children, ...props}) {
//   const resolvedPath = useResolvedPath(to)
//   const isActive = useMatch({ path: resolvedPath.pathname, end: true })
//   return (
//     <li className={isActive ? "active" : ""}>
//       <Link to={ to } {...props}>
//         { children }
//       </Link>
//     </li>
//   )
// }