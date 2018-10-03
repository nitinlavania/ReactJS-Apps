 import React from 'react'
 
 const TableData = (props) => {
      return (
          <div>
              <table cellSpacing="0" className="user-details-table">
              <thead className="user-details-thead"><th className="table-head" ><td>User Details</td></th><th><td></td></th></thead>
                  <tbody>
                    <tr>
                        <td>Username</td><td>{props.payload.userName}</td>
                    </tr>
                    <tr>
                        <td>User Id</td><td>{props.payload.userId}</td>
                    </tr>
                    <tr>
                        <td>Profile Pic</td><td>{props.payload.profilePic}</td>
                    </tr>
                    <tr>
                        <td>Phone Number</td><td>{props.payload.phone}</td>
                    </tr>
                    <tr>
                        <td>Email</td><td>{props.payload.email}</td>
                    </tr>
                    <tr>
                        <td>Address</td><td>{props.payload.address.flatNo}, {props.payload.address.city}, {props.payload.address.state} - {props.payload.address.pinCode} </td>
                    </tr>
                  </tbody>
              </table>
          </div>
      )
 }
 export default TableData