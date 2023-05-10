import React from 'react'
import axios from 'axios'

function Product({title,desc, id, etitle, edesc, edit, eid, eupload, index, upload}) {
    const bg = ['#0d6efd','#6f42c1','#dc3545','#fd7e14','#ffc107','#198754']
    const handleEdit = () =>{
        etitle(title)
        edesc(desc)
        eupload(upload)
        edit(false)
        eid(id)
        console.log(id);
        
        setTimeout(
            edit(true),
            3000
        )
    }
    const handleDelete = async() =>{
        await axios({
            method: 'get',
            url: `http://localhost:4000/delete/${id}`,
          }).then(
            (res)=>{
              localStorage.setItem("products", JSON.stringify(res.data));
          }
          ).catch((err)=>{
            console.log(err)
            alert("Invalid Credential")
          }) 
    }

    const classs = `card shadow todo-${index%6}`
  return (
    <div className={classs} style={{width:"100%",height:"100%"}}>
    <div className="card-body" >
      <span className="todo-title mb-5">{title}</span>
      <hr className="todo-line" />
      <p className="my-3">{desc}</p>
      <div>
        <img src={upload} style={{objectFit:"cover", width:"100%", height:"100%"}} alt="this is img" />
      </div>
      <hr className="todo-line" />
      <div className="d-flex justify-content-end">
        <div className="mx-4 pointer" onClick={handleEdit}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="23"
            height="23"
            fill={bg[index%6]}
            class="bi bi-pencil-square"
            viewBox="0 0 16 16"
          >
            <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z" />
            <path
              fill-rule="evenodd"
              d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"
            />
          </svg>
        </div>
        <div className="pointer" onClick={handleDelete}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="23"
            height="23"
            fill={bg[index%6]}
            class="bi bi-calendar-x"
            viewBox="0 0 16 16"
          >
            <path d="M6.146 7.146a.5.5 0 0 1 .708 0L8 8.293l1.146-1.147a.5.5 0 1 1 .708.708L8.707 9l1.147 1.146a.5.5 0 0 1-.708.708L8 9.707l-1.146 1.147a.5.5 0 0 1-.708-.708L7.293 9 6.146 7.854a.5.5 0 0 1 0-.708z" />
            <path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5zM1 4v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4H1z" />
          </svg>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Product;