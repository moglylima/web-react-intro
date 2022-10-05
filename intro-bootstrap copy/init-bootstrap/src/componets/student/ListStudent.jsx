import React, { useState } from "react"
import { useEffect } from "react"


import axios from "axios";

const ListStudent =()=>{

    const url = "http://localhost:3000/student"

    const studentsList = []
    const [students, setStudents] = useState(studentsList)

    useEffect(()=> {
        axios.get(url)
        .then((res) => {
            console.log(res.data)
        })
        .catch((err) =>{
            console.log(err)
        })
        
    })

    const generateTableBody = () => {

      return students.map(
        (element, index) => {
          return (
            <tr key={index}>
              <td>{element.id}</td>
              <td>{element.name}</td>
              <td>{element.course}</td>
              <td>{element.ira}</td>
            </tr>
          )
        }
      )
    }

    return(
        <div>
            <table className='table table-striped'>
        <thead>
          <tr>
            <th>ID</th>
            <th>Nome</th>
            <th>Curso</th>
            <th>IRA</th>
          </tr>
        </thead>
        <tbody>
          {generateTableBody()}
        </tbody>
      </table>
        </div>       
    )
}

export default ListStudent