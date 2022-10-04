import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import SHcard from "./SHcard";

function ShoppingHistory() {
  const user = useSelector((state) => state.userSignReducer.userData);
  const history = user.history;

  console.log("user", user);

  return history.length ? (
    <section className="relative py-16 bg-white">
      <div className="w-full mb-12 px-4">
        <div
          className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded 
    bg-gray-100"
        >
          <div className="rounded-t mb-0 px-4 py-3 border-0">
            <div className="flex flex-wrap items-center">
              <div className="relative w-full px-4 max-w-full flex-grow flex-1 ">
                <h3 className="font-semibold text-lg">Purchase history</h3>
              </div>
            </div>
          </div>
          <div className="block w-full overflow-x-auto ">
            <table className="items-center w-full bg-transparent border-collapse">
              <thead>
                <tr>
                  <th className="px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-center bg-gray-300">
                    Product
                  </th>
                  <th className="px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-center bg-gray-300">
                    Title
                  </th>
                  <th className="px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-center bg-gray-300">
                    Artist
                  </th>
                  <th className="px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-center bg-gray-300">
                    Purchase Date
                  </th>
                  <th className="px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-center bg-gray-300">
                    Price
                  </th>
                </tr>
              </thead>
              <tbody>
                {history?.map((e) => {
                  return (
                    <SHcard
                      detail={e.transaction.product._id}
                      key={e._id}
                      _id={e._id}
                      img={e.transaction.product.img}
                      title={e.transaction.product.title}
                      userName={e.transaction.product.userName}
                      dateOfBuy={e.dateOfBuy.slice(0, 10)}
                      total_money={e.transaction.total_money}
                      quantity={e.transaction.quantity}
                    />
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  ) : (
    <div className="flex flex-col items-center font-bold my-auto">
      <a>Your shopping history is empty!</a>
      <Link to='/home' className="bg-red-500 hover:bg-red-300 hover:shadow-sm hover:shadow-gray-900 rounded-full px-1">Home</Link>
    </div>
  );
}

export default ShoppingHistory;
