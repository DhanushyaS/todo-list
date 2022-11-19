import {Link} from 'react-router-dom'

function Home() {
  return (
    <div className="vh-100 home">
      {/* <TodoList /> */}
      <h1 className="text-center fs-1 fw-bold py-5">TODO LIST</h1>
      <div className="row">
        <div className="col-md-6 p-5">
        <Link to='/add' className='text-dark link'>
          <div className="card shadow nav-card-add  text-center">
            <div className="card-body d-flex justify-content-center align-items-center">
              <div>
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="66"
                  height="66"
                  fill="currentColor"
                  class="bi bi-file-plus-fill"
                  viewBox="0 0 16 16"
                >
                  <path d="M12 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2zM8.5 6v1.5H10a.5.5 0 0 1 0 1H8.5V10a.5.5 0 0 1-1 0V8.5H6a.5.5 0 0 1 0-1h1.5V6a.5.5 0 0 1 1 0z" />
                </svg>
              </div>
              <div className="mt-3 fs-3">ADD TODO</div>
              </div>
            </div>
          </div>
          </Link>
        </div>
        <div className="col-md-6 p-5">
        <Link to='/todo' className='text-dark link' >
          <div className="card shadow nav-card-todo  text-center">
            <div className="card-body d-flex justify-content-center align-items-center">
              <div>
              <div>
              <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="66"
                  height="66"
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
              </div>
              <div className="mt-3 fs-3">MY TODO</div>
              </div>
            </div>
          </div>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Home;
