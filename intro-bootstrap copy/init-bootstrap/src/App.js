import React from 'react'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min'

import {Routes, Link, Route} from "react-router-dom"
import Home from './componets/Home';
import CreateStudent from './componets/student/CreateStudent';
import EditStudent from './componets/student/EditStudent';
import ListStudent from './componets/student/ListStudent';

function App() {
  return (
    <div className="container">
  
  <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
  
  <div className="container-fluid">
    
    {/* <a className="navbar-brand" href="#">Crud</a> */}
    <Link to="/" className="navbar-brand">Crud</Link>

    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>

    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item" >
          <Link  className="nav-link active" aria-current="page" to='/'>Home</Link>
          
          {/* <a classNameName="nav-link active" aria-current="page" href="#">Home</a> */}
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
          Student
          </a>
          <ul className="dropdown-menu">
            <li>
              <Link to='/createstudent' className="dropdown-item">Create</Link>
              {/* <a class="dropdown-item" href="#">Create</a> */}
              </li>
            <li>
             <Link to='/liststudent' className="dropdown-item">List</Link>
              </li>
            <li>
            <Link to='/editstudent' className="dropdown-item">Edit</Link>
              </li>
          </ul>
        </li>
        
      </ul>
      
    </div>
  </div>
</nav>
<Routes>
  <Route path='/' element={ <Home />} exact/>
 
  <Route path='/createstudent' element={ <CreateStudent />}/>

  <Route path='/editstudent' element={ <EditStudent />}/>

  <Route path='/liststudent' element={ <ListStudent />}/>

</Routes>
    </div>


  );
}

export default App;
