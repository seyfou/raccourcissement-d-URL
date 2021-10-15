import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Navbar.css";
import { Link, useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../js/actions/user";

import { Dropdown, ButtonGroup, NavDropdown, Nav } from "react-bootstrap";

function Navbar() {
  const dispatch = useDispatch();
  const history = useHistory();

  const user = useSelector((state) => state.userReducer.user);
  return (
    <div>
      
  <ul class="topnav">
    <li>
      {user ? null:
      <li>
        {" "}
        <Link to="/signIn" style={{ color: "white" }}>
         Connexion
        </Link>
       </li>}
      </li>
      {user ? null:          
       <li><a class="active" href="/">Home</a> </li>}
 
  <li>
   {user ? (
    <Link to="/Services">Services</Link>
    ) : null}
  </li>
  
  <li>
  {user ? (
    <li>
     <Link to="/dashbord"> Tableau de statistics</Link>
    </li>
   ) : null}
  </li>

   <li>   
     </li>             
       {user ? (
         <li >
           <Link to="/userProfile">
             <img
              style={{
               backgroundSize: "32px 32px",
               borderRadius: "50%",
               height: "30px",
               width: "32px",
               marginTop: "-13px"
                    }}
                src={user.imageUrl}
                alt="."
                aria-hidden="true"
                data-noaft=""
                />
                _{user.lastName}
                .{user.name}        
             </Link>
          </li>
       ) : null}

{user ? (
 <li>
  <button style={{backgroundColor:"#333", color:"white"}}
     onClick={() => {
         dispatch(logout());
         history.push("/");
         }}>
      {" "}
      <svg  xmlns="http://www.w3.org/2000/svg" width="16" height="43" fill="currentColor" class="bi bi-box-arrow-left" viewBox="0 0 16 16">
     <path fill-rule="evenodd" d="M6 12.5a.5.5 0 0 0 .5.5h8a.5.5 0 0 0 .5-.5v-9a.5.5 0 0 0-.5-.5h-8a.5.5 0 0 0-.5.5v2a.5.5 0 0 1-1 0v-2A1.5 1.5 0 0 1 6.5 2h8A1.5 1.5 0 0 1 16 3.5v9a1.5 1.5 0 0 1-1.5 1.5h-8A1.5 1.5 0 0 1 5 12.5v-2a.5.5 0 0 1 1 0v2z"/>
     <path fill-rule="evenodd" d="M.146 8.354a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L1.707 7.5H10.5a.5.5 0 0 1 0 1H1.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3z"/>
     </svg>    Déconnexion
  </button>
</li>                 
) : null}
</ul>
</div>
  );
}
export default Navbar;
