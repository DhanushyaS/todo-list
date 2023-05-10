import React, {useState, useEffect} from "react";
import {Link} from 'react-router-dom'
import Product from "../Product/Product";
import EditProduct from "../EditProduct/EditProduct";
import axios from "axios";

function ProductList() {
    const [modifyProduct, setModifyProduct] = useState(false)
    const [etitle, setETitle] = useState('')
    const [edesc, setEDesc] = useState('')
    const [eid, setEID] = useState('')
    const [eupload, setEUpload] = useState('')
    const [products, setProducts] = useState([])

    const getProduct = async() =>{
      try{
        const {data}=await axios.get(`http://localhost:4000/get`)
        localStorage.setItem("products", JSON.stringify(data));
        }catch(err){
          alert(err)
        }
    }
    useEffect(()=>{
      // getProduct()
      setProducts(JSON.parse(localStorage.getItem("products")))
      
    },[products])

   

  return (
    <div>
      <div className="container">
      <div className="d-flex align-items-center justify-content-between">
        <div className="my-5 fs-2 ">Products</div>
        <div>
        <Link to="/add" className="text-dark link">
            <div className="d-flex align-items-center btn-1 pointer">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-house"
                viewBox="0 0 16 16"
              >
                <path d="M8.707 1.5a1 1 0 0 0-1.414 0L.646 8.146a.5.5 0 0 0 .708.708L2 8.207V13.5A1.5 1.5 0 0 0 3.5 15h9a1.5 1.5 0 0 0 1.5-1.5V8.207l.646.647a.5.5 0 0 0 .708-.708L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.707 1.5ZM13 7.207V13.5a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5V7.207l5-5 5 5Z" />
              </svg>
              <div className="mx-2">Add Products</div>
            </div>
            </Link>
        </div>
      </div>
        <div className="row">
        {products?.map((e,i)=>{
            return(
            <div className="col-md-3 py-3" key={i}>
                <Product title={e.title} index={i} upload={e.upload}  desc={e.description} id={e._id} etitle={setETitle} edesc={setEDesc} eupload={setEUpload} eid={setEID} edit={setModifyProduct} />
            </div>

            )
        })}
        </div>
      </div>
      {modifyProduct && 
      <EditProduct state={setModifyProduct} tit={etitle} desc={edesc} id={eid} upload={eupload}/>}
    </div>
  );
}

export default ProductList;
