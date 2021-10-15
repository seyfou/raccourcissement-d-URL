import React, {useEffect} from 'react'
import './dashbord.css'
import AdminTabs from './AdminTabs'
import {useSelector,useDispatch} from "react-redux"
import {getUsers} from "../../js/actions/user"
import {getReservations} from "../../js/actions/reservation"


function Dashbord() {
  const dispatch = useDispatch()
  const loaduser= useSelector(state => state.userReducer.loaduser);
  const user = useSelector(state => state.userReducer.user)
  useEffect(()=>{
    dispatch(getUsers());dispatch(getReservations())},[]
)
  return (
    <div style={{marginTop:100}}>
    <link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.3.0/css/font-awesome.min.css" rel="stylesheet" />
    <div className="container bootstrap snippets bootdeys">
      <div className="row" id="user-profile">
        
        <div className="col-lg-9 col-md-8 col-sm-8" style={{width:889}}>
          <div className="main-box clearfix">
            

          {/*Here write code*/ }
            <div className="tabs-wrapper profile-tabs">
            
               <AdminTabs/>
              
              <div className="tab-content">
                

               
              </div>
            </div>
          </div>
        
        </div>
      </div>
    </div>
  </div>
  )
}

export default Dashbord
