import React from 'react'

const Users = ({data}) => {
    // console.log(data);
  return (
    <div>
      <h1 className='text-2xl font-bold'>Danh sach Users</h1>
      <table className='table m-16'>
        <thead>
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
    </div>
  )
}

export default Users;
