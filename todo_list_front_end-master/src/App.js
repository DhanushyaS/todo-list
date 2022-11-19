import {BrowserRouter as Router } from 'react-router-dom'
import './App.css';
import AllRoutes from './AllRoutes';

function App() {
  return (
    <div>
      <Router>
        <AllRoutes />
      </Router>
    </div>
  );
}

export default App;