import React from "react";
import { useSelector } from "react-redux";
import SHcard from "./SHcard";

function ShoppingHistory() {
  const user = useSelector((state) => state.userSignReducer.userData);
  const history = user.history;

  console.log(history);
  console.log(history[0]._id);
  return (
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
                {history
                  ? history.map((e) => {
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
                    })
                  : null}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ShoppingHistory;
