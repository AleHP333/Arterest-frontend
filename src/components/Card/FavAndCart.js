const addToFav = (userName, userImage, title, img, _id, price, handleAdded, handleNotAdded) => {
    let favs = JSON.parse(localStorage.getItem('favList'))
    if (favs) {
        if (favs.length >= 30) {
            handleNotAdded()
            return
        }
        if (!favs.some(item => item.id === _id)) {
            favs.push({ userName, userImage, title, img, _id, price, quantity: 1 })
        }
    } else {
        favs = [{ userName, userImage, title, img, _id, price, quantity: 1 }]
    }
    localStorage.setItem('favList', JSON.stringify(favs))
    handleAdded()
}

const addToCart = (userName, userImage, title, img, _id, price, color, handleAdded, handleNotAdded) => {
    let cart = JSON.parse(localStorage.getItem('cartList'))
    if (cart) {
        if (cart.length >= 30) {
            handleNotAdded()
            return
        }
        if (!cart.some(item => item.id === _id)) {
            cart.push({ userName, userImage, title, img, _id, price, color, quantity: 1 })
        }
    } else {
        cart = [{ userName, userImage, title, img, _id, price, color, quantity: 1 }]
    }
    localStorage.setItem('cartList', JSON.stringify(cart))
    handleAdded()
}

const getPrice = () => {
    let total = 0
    JSON.parse(localStorage.getItem('cartList')).forEach(e => {
        total += e.price * e.quantity
    })
    return total.toFixed(2)
}


module.exports = {
    addToFav,
    addToCart,
    getPrice
}