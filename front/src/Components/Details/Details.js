import axios from 'axios'
import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'

const Details = () => {
   const {id}=useParams()
   const getOneProduct=async()=>{
    try {
      const response=await axios.get(`http://localhost:5000/products/details/${id}`)
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(() => {
    getOneProduct()
  },[])
  return (
    <div>Details {id} </div>
  )
}

export default Details