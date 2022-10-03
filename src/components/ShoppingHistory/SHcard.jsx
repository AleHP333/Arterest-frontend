import React from "react";
import { Link } from "react-router-dom";

function SHcard({_id, img, title, userName, dateOfBuy, total_money, quantity, detail}) {
  return (
    <tr key={_id}>
      <th className="border-t-0 px-6 align-middle justify-center border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-center flex items-center">
        <img src={img} className="h-12 w-12 bg-white rounded" alt={title} />
      </th>
      <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap text-center p-4">
       <Link to={`/detail/${detail}`}>{title}</Link>
      </td>
      <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap text-center p-4">
       <Link to={"/artistprofile/" + userName}>{userName}</Link>
      </td>
      <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap text-center p-4">
        {dateOfBuy}
      </td>
      <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap text-center p-4">
        ${total_money} ({quantity} Items)
      </td>
    </tr>
  );
}

export default SHcard;
