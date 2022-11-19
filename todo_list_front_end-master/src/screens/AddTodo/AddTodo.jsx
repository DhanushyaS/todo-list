import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

function AddTodo() {
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [deadline, setDeadline] = useState();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios({
      method: "post",
      url: "http://localhost:4000/add",
      data: { title, description, deadline },
    })
      .then((res) => {
        localStorage.setItem("todos", JSON.stringify(res.data));
        navigate("/todo");
      })
      .catch((err) => {
        console.log(err);
        alert("Invalid Credential");
      });
  };
  return (
    <div className="">
      <div className="row d-flex justify-content-center align-items-center">
        <div className="col-md-6 vh-100 ">
          <img
            src="https://images.unsplash.com/photo-1578852612716-854e527abf2e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8dGFza3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60"
            className="side-img"
            alt=""
          />
        </div>
        <div className="col-md-6 px-5">
          <div className="d-flex justify-content-around mb-5">
          <Link to="/" className="text-dark link">
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
              <div className="mx-2">Go to Home</div>
            </div>
            </Link>
            <Link to='/todo' className="text-dark link">
            <div className="d-flex align-items-center justify-content-center btn-2 pointer">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-list-task"
                viewBox="0 0 16 16"
              >
                <path
                  fill-rule="evenodd"
                  d="M2 2.5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5V3a.5.5 0 0 0-.5-.5H2zM3 3H2v1h1V3z"
                />
                <path d="M5 3.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zM5.5 7a.5.5 0 0 0 0 1h9a.5.5 0 0 0 0-1h-9zm0 4a.5.5 0 0 0 0 1h9a.5.5 0 0 0 0-1h-9z" />
                <path
                  fill-rule="evenodd"
                  d="M1.5 7a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5H2a.5.5 0 0 1-.5-.5V7zM2 7h1v1H2V7zm0 3.5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5H2zm1 .5H2v1h1v-1z"
                />
              </svg>
              <div className="mx-2">Go to My TODO</div>
            </div>
            </Link>
          </div>
          <div className="text-center fs-2 fw-bold mb-5">Create TODO</div>
          <div className="card  shadow">
            <div className="card-body">
              <div className="my-3">
                <label htmlFor="" className="form-label">
                  Task Name
                </label>
                <input
                  type="text"
                  className="form-control"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                />
              </div>
              <div className="my-3">
                <label htmlFor="" className="form-label">
                  Task Description
                </label>
                <textarea
                  className="form-control"
                  onChange={(e) => setDescription(e.target.value)}
                >
                  {description}
                </textarea>
              </div>
              <div className="my-3">
                <label htmlFor="" className="form-label">
                  Deadline
                </label>
                <input
                  type="date"
                  className="form-control"
                  value={deadline}
                  onChange={(e) => setDeadline(e.target.value)}
                />
              </div>
              <div className="d-flex justify-content-end">
                <button className="btn add-btn" onClick={handleSubmit}>
                  Create
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddTodo;
