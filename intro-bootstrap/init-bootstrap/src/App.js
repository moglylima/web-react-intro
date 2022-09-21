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
  
  <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
  
  <div class="container-fluid">
    
    {/* <a class="navbar-brand" href="#">Crud</a> */}
    <Link to="/" class="navbar-brand">Crud</Link>

    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>

    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item" >
          <Link  className="nav-link active" aria-current="page" to='/'>Home</Link>
          
          {/* <a className="nav-link active" aria-current="page" href="#">Home</a> */}
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
          Student
          </a>
          <ul class="dropdown-menu">
            <li>
              <Link to='/createstudent' class="dropdown-item">Create</Link>
              {/* <a class="dropdown-item" href="#">Create</a> */}
              </li>
            <li>
             <Link to='/liststudent' class="dropdown-item">List</Link>
              </li>
            <li>
            <Link to='/editstudent' class="dropdown-item">Edit</Link>
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
