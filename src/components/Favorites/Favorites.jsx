import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Card from "../Card/Card";
import "./fav.css";

export default function Favorites({ setFavProduct }) {
  const [favProducts, setFavProducts] = useState(
    JSON.parse(localStorage.getItem("favList"))
  );

  useEffect(() => {}, [favProducts, setFavProduct]);

  console.log(favProducts);
  const renderProducts = () => {
    if (!favProducts || favProducts.length === 0) {
      return (
        <div>
          <h4>Your favorite list is empty!</h4>
          <Link to="/home">
            <div>Go back to the Homepage</div>
          </Link>
        </div>
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
