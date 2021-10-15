import React ,{useEffect,useState}from 'react'
import './adminTabs.css'
import {useSelector,useDispatch} from "react-redux"
import {getUsers} from "../../js/actions/user"
import UserTab from './UserTab'
import {getReservations,deleteReservation} from '../../js/actions/reservation'

function AdminTabs() {
  const dispatch = useDispatch()
  const reservations = useSelector(state => state.reservationReducer.reservations)
  const [search, setsearch] = useState("")

  useEffect(()=>{
    dispatch(getUsers());dispatch(getReservations())},[]
)

  return (
    <div>
        <div className="tabset" >
         
          {/* Tab 2 */}
          <input type="radio" name="tabset" id="tab2" aria-controls="rauchbier" />
          <label selected htmlFor="tab2">Statistics</label>
       
         
          {/*Get users */}
          <div className="tab-panels" >
           

            {/*Get reservations */}
            <section id="rauchbier" className="tab-panel">
            <div className="col-md-12">
            <ol className="breadcrumb" style={{width:777, marginLeft:-22, backgroundColor:"rgb(182 80 80)", color:"white"}}>
                  <h3  style={{fontWeight:'bolder', fontSize:16}}>Liste des sites consultés </h3>
                </ol>
                <div className="chat-search-box">
                        <div className="input-group">
                          <input
                            className="form-control"
                            placeholder="Search"
                            onChange={(e)=>setsearch(e.target.value)}
                          />
                          <div className="input-group-btn">
                            <button type="button" className="btn btn-info">
                              <i className="fa fa-search" />
                            </button>
                          </div>
                        </div>
                      </div>
                
                <table className="table table-responsive table-borderless">
              <thead>
                <tr className="bg-light" style={{width:700}}>
                  <th scope="col" width="20%" >Url</th>
                  <th scope="col" width="20%">Date</th>
                  <th scope="col" width="20%">Status</th>
                  <th scope="col" width="30%">Client(e)</th>
               
                  <th scope="col" ></th>
                  <th scope="col" ></th>


                </tr>
              </thead>
              <tbody>

            {reservations.filter(el=>el. titleUrl.toLowerCase().includes(search.toLowerCase())).map(el=> <tr>

            <td>{el.titleUrl}</td>
            <td>{el.dateRes}</td>
            <td><i className="fa fa-check-circle-o green" /><span className="ms-1">{el.status}</span></td>
            <td><img src={el.imageUrl} style={{marginRight:12}} width={25} height={25} ></img>{el.userName}</td>
          </tr>)}

              </tbody>
            </table>
              </div>
            </section> 
          </div>
        </div>
       
      </div>
  )
}

export default AdminTabs