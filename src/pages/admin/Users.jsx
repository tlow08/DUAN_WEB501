// import React from 'react'
import { Link } from 'react-router-dom';

const Users = ({data}) => {
    // console.log(data);
  return (
   <>

    <section>
    <h1 className="text-center font-bold text-2xl text-red-600 my-4">LIST OF User</h1>
      <table className='table table-striped'>
        <thead className='text-xl text-center'>
          <tr>
          <th>Id</th>
          <th>Email</th>
          <th>Password</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) =>(
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.email}</td>
              <td>{item.password}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
   </>
  )
}

export default Users;
