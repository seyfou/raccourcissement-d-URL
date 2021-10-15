import React from 'react'
import {useEffect,useState} from 'react'
import { useSelector,useDispatch } from 'react-redux'
import {Link} from 'react-router-dom'
import { Button, Modal } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from "axios"

 import { categoryReducer} from '../../js/reducers/category.js'
import Category from './Category'
import { getCategory, postCategory } from '../../js/actions/category'


function AddCategory() {
  const [show, setShow] = useState(false);
  
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const dispatch = useDispatch()
  const user = useSelector(state => state.userReducer.user)


  const [category, setCategory] = useState({titleUrl:"",description:"",categoryImage:""})
  const userReducer = useSelector(state => state.categoryReducer.category)
 
  useEffect(() => {
    setCategory({titleUrl:"",description:"",categoryImage:""})
  },[categoryReducer]) 
  
  const handlechange=(e)=>{
    e.preventDefault();
    setCategory({...category,[e.target.name]:e.target.value})
}


const [categoryImage, setCategoryImage] = useState(false)
const [loading, setLoading] = useState(false)



const styleUpload = {
    display: categoryImage ? "block" : "none"
}

const handleDestroy = async () => {
    try {
      
        setLoading(true)
        await axios.post('/destroy', {public_id: categoryImage.public_id})
        setLoading(false)
        setCategoryImage(false)
    } catch (err) {
        alert(err.response.data.msg)
    }
}
  
return (
    <div>
       {(user && user.isAdmin)?
    <Button bsPrefix="add_btn"  onClick={handleShow}  > 
    
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-plus-square-fill" viewBox="0 0 16 16">
  <path d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2zm6.5 4.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3a.5.5 0 0 1 1 0z"/>
</svg>
            </Button> :null}
 
       <Modal  show={show} onHide={handleClose}
          size="lg">
         <Modal.Header closeButton>
         <Modal.Title>Ajouter </Modal.Title>
         </Modal.Header>
         <Modal.Body >
         
         <table>
         <tr><td style={{width:200, height:20, marginRight:20}}><label >Url:</label></td><td><input type="text" name="titleUrl" value={category.titleUrl} onChange={handlechange}  ></input></td></tr>
         <tr><td><label>Description:</label></td><td><input type="text" name="description" value={category.description} onChange={handlechange}  ></input></td></tr>
         <tr><td><label>Image</label></td><td><input type="text" name="categoryImage" value={category.categoryImage} onChange={handlechange} ></input></td></tr>
         
        
         </table>
         
         </Modal.Body>
         <Modal.Footer>
           
           <Link to="/Services">
           <Button style={{width:120,fontWeight:"bold", height:36,backgroundColor:"rgb(222 113 113)", padding:".375rem .75re",fontSize:"1rem",lineHeight:"1.5",borderRadius:".25rem", border:"none"}} onClick={()=> {dispatch(postCategory(category));dispatch(getCategory());handleClose()}}>
             
          Ajouter
           </Button>
           </Link>
         </Modal.Footer>
       </Modal>
       </div>
   );


    
}

export default AddCategory
