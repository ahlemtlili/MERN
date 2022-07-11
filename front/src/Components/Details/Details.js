import axios from "axios";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getOneProduct } from "../../Redux/actions/productActions";

const Details = () => {
  const { id } = useParams();
  const dispatch=useDispatch()
  useEffect(() => {
    dispatch(getOneProduct(id));
  }, []);
  const oneProduct=useSelector(state=>state.productReducer.oneProduct)
  return <div> <h1>{oneProduct.name} </h1>
  <h1>{oneProduct.price} </h1>
         </div>

};

export default Details;
