
export const addToFav = (userName, userImage, title, img, _id, price, handleAdded, handleNotAdded, e, setFavProducts, stock) => {
  e.preventDefault()
  let favs = JSON.parse(localStorage.getItem('favList'))
  if(favs === null || !favs.length){
    //   localStorage.setItem("favList", JSON.stringify([{ userName, userImage, title, img, _id, price, stock: stock}]))
    localStorage.setItem("favList", JSON.stringify([_id]))
      setFavProducts(JSON.parse(localStorage.getItem("favList")))
  } else {
    //   let found = favs.find(item => item._id === _id)
      let found = favs.find(item => item === _id)
      if(found){
          let removed = favs.filter(item => item !== found)
          localStorage.setItem("favList", JSON.stringify([...removed]))
          setFavProducts(JSON.parse(localStorage.getItem("favList")))
      } else {
        //   localStorage.setItem("favList", JSON.stringify([...favs,{ userName, userImage, title, img, _id, price, stock: stock}]))
          localStorage.setItem("favList", JSON.stringify([...favs, _id]))
          setFavProducts(JSON.parse(localStorage.getItem("favList")))
      }
  }

}

export const addToCart = (userName,
  userImage,
  title,
  img,
  stock,
  _id,
  price,
  handleAdded,
  handleNotAdded,
  e) => {
      e.preventDefault()
  let cart = JSON.parse(localStorage.getItem('cartList'));
  if(stock === 0){
    return 
  }
  if(cart === null || !cart.length){
      localStorage.setItem("cartList", JSON.stringify([{ stock, userName, title, img, _id, price, quantity: 1}]))
  } else {
      let found = cart.find(item => item._id === _id)
      if(found){
          let removed = cart.filter(item => item !== found)
        
          localStorage.setItem("cartList", JSON.stringify([...removed]))
      } else {
          localStorage.setItem("cartList", JSON.stringify([...cart,{ stock, userName, title, img, _id, price, quantity: 1}]))
      }
  }
}

export const getPrice = () => {
  let total = 0
  JSON.parse(localStorage.getItem('cartList')).forEach(e => {
      total += e.price * e.quantity
  })
  return total.toFixed(2)
}
