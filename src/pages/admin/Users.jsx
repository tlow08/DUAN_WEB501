// import React from 'react'
import { Link } from 'react-router-dom';

const Users = ({data}) => {
    // console.log(data);
  return (
   <>
    <section className="pt-16"></section>
    <section>
      <h1 className='text-2xl font-bold text-center'>List Of Users</h1>
      <Link to="/admin" className='btn btn-warning my-8'>List of products</Link>
      <table className='table table-striped'>
        <thead className='text-xl text-center'>
          <th>Id</th>
          <th>Email</th>
          <th>Password</th>
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
