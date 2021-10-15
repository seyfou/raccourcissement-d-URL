import React from 'react'
import {useEffect,useState} from 'react'
import { useSelector,useDispatch } from 'react-redux'
import {Link} from 'react-router-dom'
import { Button, Modal } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from "axios"
import {editUser,current} from "../../js/actions/user"



function EditProfile() {
  const [show, setShow] = useState(false);
  
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const dispatch = useDispatch()


 
  const user = useSelector(state => state.userReducer.user)
  const [name, setName] = useState(user.name)
  const [lastName, setLastName] = useState(user.lastName)
  const [email, setEmail] = useState(user.email)
  const [password, setPassword] = useState(user.password)
 const [imageUrl, setImageUrl] = useState(user.imageUrl)
const [isAdmin, setIsAdmin] = useState(user.isAdmin)
const [phone, setPhone] = useState(user.phone)


  const styleUpload = {
      display: imageUrl ? "block" : "none"
  }

return (
    <div>
     
            <button className="btn btn-primary" onClick={handleShow} >Modifier votre profil</button>
 
       <Modal  show={show} onHide={handleClose}
          size="lg">
         <Modal.Header closeButton>
         <Modal.Title>Ajouter photo</Modal.Title>
         </Modal.Header>
         <Modal.Body >

    
         <table>
        
        
         <tr><td><label>image</label></td><td> <input type="text" name="imageUrl" value={imageUrl}  onChange={(e)=>setImageUrl(e.target.value)} ></input></td></tr>
               
                      
                     
                     <tr><td><label>Prénom</label></td><td><input type="text" name="name" value={name} onChange={(e)=>setName(e.target.value)} ></input></td></tr>
         <tr><td><label>Nom</label></td><td><input type="text" name="lastName" value={lastName} onChange={(e)=>setLastName(e.target.value)} ></input></td></tr>
         <tr><td><label>email</label></td><td><input type="text" name="email" value={email} onChange={(e)=>setEmail(e.target.value)} ></input></td></tr>
         <tr><td><label>téléphone</label></td><td><input type="text" name="phone" value={phone} onChange={(e)=>setPhone(e.target.value)}  ></input></td></tr>
         </table>
         
         </Modal.Body>
         <Modal.Footer>
           
           <Link to="/userProfile">
           <Button  style={{width:120,fontWeight:"bold", height:36,backgroundColor:"rgb(0 80 80)", padding:".375rem .75re",fontSize:"1rem",lineHeight:"1.5",borderRadius:".25rem", border:"none"}} onClick={()=> {dispatch(editUser(user._id,{name,lastName,email,password,imageUrl,isAdmin,phone}));dispatch(current());handleClose() }} >
             
          Modifier
           </Button>
           </Link>
         </Modal.Footer>
       </Modal>
       </div>
   );


    
}

export default EditProfile