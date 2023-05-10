import React, {useState} from "react";
import axios from "axios";
import FileBase64 from 'react-file-base64';
function EditProduct({state, tit, desc, id, upload}) {
    const [title,setTitle]=useState(tit)
    const [description,setDescription]=useState(desc)
    const [up,setUp]=useState(upload)
    const handleSubmit = async(e) =>{
      console.log(id);
        e.preventDefault()
        try{
          console.log(id);
        const {data}=await axios.post(`http://localhost:4000/edit/${id}`,{title,description,upload:upload})
        localStorage.setItem("products", JSON.stringify(data));
        state(false)
        
        }catch(err){
          alert(err)
        }
      }

  return (
    <div className="shadow bg-light add-form  ">
      <div className="card ">
        <div className="card-body">
          <div className="d-flex justify-content-between mt-2 mb-4">
            <div className="fs-4 fw-bold">Edit Product</div>
            <div className="pointer" onClick={()=>state(false)}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-x-octagon"
                viewBox="0 0 16 16"
              >
                <path d="M4.54.146A.5.5 0 0 1 4.893 0h6.214a.5.5 0 0 1 .353.146l4.394 4.394a.5.5 0 0 1 .146.353v6.214a.5.5 0 0 1-.146.353l-4.394 4.394a.5.5 0 0 1-.353.146H4.893a.5.5 0 0 1-.353-.146L.146 11.46A.5.5 0 0 1 0 11.107V4.893a.5.5 0 0 1 .146-.353L4.54.146zM5.1 1 1 5.1v5.8L5.1 15h5.8l4.1-4.1V5.1L10.9 1H5.1z" />
                <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
              </svg>
            </div>
          </div>
          <div className="my-3">
          <label htmlFor="" className="form-label">
                  Product Name
                </label>
                <input
                  type="text"
                  className="form-control"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  // onChange={e => setTitle({ ...title, title: e.target.value })}
                />
              </div>
              <div className="my-3">
                <label htmlFor="" className="form-label">
                  Product Description
                </label>
                <textarea
                  className="form-control"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  // onChange={e => setDescription({ ...description, description: e.target.value })}
                >
                  {/* {description} */}
                </textarea>
              </div>
              <div className="my-3">
                <label htmlFor="" className="form-label">
                  Upload Image
                </label>
                <FileBase64
                                type="file" required
                                multiple={false}
                                onDone={({ base64 }) => setUp({ ...up, upload: base64 })}
                />
                {/* <input
                  type="date"
                  className="form-control"
                  value={upload}
                  onChange={(e) => setUpload(e.target.value)}
                /> */}
              </div>
          <div className="d-flex justify-content-end">
          <button className="btn add-btn" onClick={handleSubmit}>Edit</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EditProduct;
