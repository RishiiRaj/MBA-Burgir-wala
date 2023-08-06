import React from "react";
import { Link } from "react-router-dom";
import { AiFillEye } from "react-icons/ai";

const MyOrders = () => {
  return (
    <section className="tableClass">
      <main>
        <table>
          <thead>
            <tr>
              <th>Order Id</th>
              <th>Status</th>
              <th>Item QUantity</th>
              <th>Amount</th>
              <th>Payment Method</th>
              <th>Action</th>
            </tr>
          </thead>

          <tbody>
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
          </tbody>
        </table>
      </main>
    </section>
  );
};

export default MyOrders;
