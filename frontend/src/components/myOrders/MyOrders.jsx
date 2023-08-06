import React from "react";
import { Link } from "react-router-dom";
import { AiFillEye } from "react-icons/ai";

const MyOrders = () => {
  const arr = [1, 2, 3, 4];
  return (
    <section className="tableClass">
      <main>
        <table>
          <thead>
            <tr>
              <th>Order Id</th>
              <th>Status</th>
              <th>Item Quantity</th>
              <th>Amount</th>
              <th>Payment Method</th>
              <th>Action</th>
            </tr>
          </thead>

          <tbody>
            {arr.map((i) => (
              <tr>
                <td>#dbibf</td>
                <td>Processing</td>
                <td>5</td>
                <td>Rs 500</td>
                <td>UPI</td>
                <td>
                  <Link to={`/orders/${"asdb"}`}>
                    <AiFillEye />
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </main>
    </section>
  );
};

export default MyOrders;
