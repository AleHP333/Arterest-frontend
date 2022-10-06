import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import EmptyFav from "../../pages/Empty/emptyFav";
import { getFavorites } from "../../redux/actions/productActionsTest";
import Card from "../Card/Card";
import "./fav.css";

export default function Favorites() {
  const dispatch = useDispatch()
  const favorites = useSelector((state) => state.testReducer.favorites)
  const [favProducts, setFavProducts] = useState(
    JSON.parse(localStorage.getItem("favList"))
  );

  console.log(favorites)

  useEffect(() => {
    if(favProducts !== undefined){
      dispatch(getFavorites(favProducts))
    }
  }, [favProducts]);

  console.log(favProducts);
  const renderProducts = () => {
    if (!favProducts || favProducts.length === 0) {
      return (
        <EmptyFav/>
      );
    }

    let productsMap = favorites.map((e) => (
      <div key={e.id}>
        <Card
          className="img"
          img={e.img}
          userName={e.user.userName}
          userImage={e.user.userImage}
          stock={e.stock}
          title={e.title}
          price={e.price}
          _id={e._id}
          cardLikes={e.likes.length}
          setFavProducts={setFavProducts}
        ></Card>
      </div>
    ));

    return <div className="pin_container">{productsMap}</div>;
  };

  return renderProducts();
}
