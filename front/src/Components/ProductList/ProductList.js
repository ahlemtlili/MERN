import React from 'react'
import Product from '../Product/Product'

const ProductList = ({products,getAllProducts}) => {
  return (
    <div style={{display:"flex",justifyContent:"space-evenly"}}>
        {products.map(el=><Product el={el} getAllProducts={getAllProducts} key={el._id}/>)}
    </div>
  )
}

export default ProductList