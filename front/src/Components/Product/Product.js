import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';
import { deleteProduct } from '../../Redux/actions/productActions';
import { useDispatch } from 'react-redux';

export default function Product({el}) {
    // const deleteProduct=async(id)=>{
    //     try {
    //       const response=await axios.delete(`http://localhost:5000/products/${id}`)
    //       getAllProducts()
    //       alert(response.data.msg);
    //     } catch (error) {
    //       console.log(error);
    //     }
    //   }
    const dispatch = useDispatch()
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        height="140"
        image={el.image}
        alt={el.name}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {el.name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
         Price : {el.price}
        </Typography>
      </CardContent>
      <CardActions>
        <Button onClick ={()=> dispatch(deleteProduct(el._id))} size="small">Delete</Button>
     <Link to={`/editproduct/${el._id}`}>   <Button size="small">Edit</Button></Link>

     <Link to={`/details/${el._id}`}>   <Button size="small">Details</Button></Link>
      </CardActions>
    </Card>
  );
}
