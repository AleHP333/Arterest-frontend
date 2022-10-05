import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import EmptyFav from "../../pages/Empty/emptyFav";
import Card from "../Card/Card";
import "./fav.css";

export default function Favorites() {
  const [favProducts, setFavProducts] = useState(
    JSON.parse(localStorage.getItem("favList"))
  );

  useEffect(() => {}, [favProducts, setFavProducts]);

  console.log(favProducts);
  const renderProducts = () => {
    if (!favProducts || favProducts.length === 0) {
      return (
        <EmptyFav/>
      );
    }

    let productsMap = favProducts.map((e) => (
      <div key={e.id}>
        <Card
          className="img"
          img={e.img}
          userName={e.userName}
          userImage={e.userImage}
          title={e.title}
          price={e.price}
          _id={e._id}
          setFavProducts={setFavProducts}
        ></Card>
      </div>
    ));

    return <div className="pin_container">{productsMap}</div>;
  };

  return renderProducts();
}
