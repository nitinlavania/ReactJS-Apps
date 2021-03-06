import React from 'react'

const CartData = (props) => {
    let grandTotal = 0
     return (
         <div>
             <table cellSpacing="0">
                 <thead>
                     <tr className="table-header">
                        <td>Product Category</td>
                        <td>Product Description</td>
                        <td>Product Id</td>
                        <td>Product Image URL</td>
                        <td>Product Name</td>
                        <td>Ratings</td>
                        <td>Quantity</td>
                        <td>Availability</td>
                        <td>Discount</td>
                        <td>Price</td>
                        <td>Total</td>
                     </tr>
                 </thead>
                 <tbody>
                 {props.payload && props.payload.map(item =>
                        <tr>
                            <td>{item.productCategory}</td>
                            <td>{item.productDescription}</td>
                            <td>{item.productId}</td>
                            <td>{item.productImageURL}</td>
                            <td>{item.productName}</td>
                            <td>{item.ratings}</td>
                            <td>{item.quantity}</td>
                            <td>{item.availability}</td>
                            <td>{item.discount}</td>
                            <td>{item.price}</td>
                            <td>{(item.price - item.discount) * item.quantity}</td>
                            <td style={{'display': 'none'}}>{grandTotal = grandTotal + (item.price - item.discount) * item.quantity}</td>
                        </tr>
                    )}
                 </tbody>
             </table>
             <div className="total-container">
                 <span className="total">Total: </span><span className="total-amt">{grandTotal}</span>
             </div>
         </div>
     )
}
export default CartData