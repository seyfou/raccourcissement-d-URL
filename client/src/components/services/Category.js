import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import {Link} from "react-router-dom";
import { useSelector,useDispatch } from 'react-redux'
import {deleteCategory,getCategories} from "../../js/actions/category"
import { postReservation } from '../../js/actions/reservation';
const useStyles = makeStyles({
  root: {
   width:320,
   height:425,
   marginLeft:"20px",
   marginTop:"20px",
  
    overflow: "visible",
    boxShadow: "0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23)",
    minWidth:300,
    minHeight:300
  },
  media: {
    height: 230,
    borderRadius: "4px",
  },
});

function Category({category}) {
  let dt=new Date().toLocaleDateString();
  const user = useSelector(state => state.userReducer.user)
  const dispatch = useDispatch()
  const [dateRes, setDateRes] = useState(`${dt}`);
  const [num, setNum] = useState(0);
  const [titleUrl, setTitleUrl] = useState(category.titleUrl);
  const [categoryImage,setCategoryImage] = useState(category.categoryImage);
  const [description,setDescription] = useState(category.description);
  const [userName, setUserName] = useState(user?user.name:"")
  const [userLastName, setUserLastName] = useState(user?user.lastName:'')
  const [imageUrl, setImageUrl] = useState(user?user.imageUrl:"")
  const [status, setStatus] = useState("")

const classes = useStyles();

return (
   <div> {!user ?  <Link to={`/signIn`}> 
   <Card className={classes.root}>
    <CardActionArea style={{height:200}} >
      <CardMedia
        className={classes.media}
        image={category.categoryImage}
        title="Contemplative Reptile"
      />
      <CardContent >
        <Typography gutterBottom variant="h5" component="h2">
        {category.titleUrl}
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p"  style={{minHeight:80}}>
         {category.description}
        </Typography>
     {user && user.isAdmin? <Link to="/services"><button style={{marginLeft:8,width:23,height:30,marginTop:4}} onClick={()=>{{dispatch(deleteCategory(category._id))};dispatch(getCategories())}}>   <svg style={{marginTop:-20,marginLeft:-8}} xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x" viewBox="0 0 16 16">
  <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
</svg></button></Link> :null}
      </CardContent>
    </CardActionArea>
    
  </Card></Link>
   
   :  <Link to={`/Activités`}>
  <Card className={classes.root}>
    <CardActionArea style={{height:200}} >
      <CardMedia
        className={classes.media}
        image={category.categoryImage}
        title="Contemplative Reptile"
      />
      <CardContent >
        <Typography gutterBottom variant="h5" component="h2">
        {category.titleUrl}
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p"  style={{minHeight:80}}>
         {category.description}
        </Typography>
     {user && user.isAdmin? <Link to="/services"><button style={{marginLeft:8,width:23,height:30,marginTop:4}} onClick={()=>{{dispatch(deleteCategory(category._id))};dispatch(getCategories())}}>   <svg style={{marginTop:-20,marginLeft:-8}} xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x" viewBox="0 0 16 16">
  <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
</svg></button></Link> :null}

      </CardContent>
    </CardActionArea>
    
  </Card></Link> }
  {user ?
  <Link to={{pathname:"/Services",Props:{categoryImage:category.categoryImage,titleUrl:category.titleUrl,description:category.description, dateRes:dateRes, num:num,status:status}}}>  
         <Button variant="light" style={{width:120,fontWeight:"bold", height:36,backgroundColor:"rgb(222 113 113)", padding:".375rem .75re",fontSize:"1rem",lineHeight:"1.5",borderRadius:".25rem", border:"none",color:"white"}}
          onClick={()=>{dispatch(postReservation({categoryImage,titleUrl,description,dateRes,num,userName,userLastName,imageUrl}))}} > 
             More
           </Button></Link>
           
  :null }
  <div><a href={`${titleUrl}`}>Open</a></div>
  </div> 
);

    
}

export default Category
