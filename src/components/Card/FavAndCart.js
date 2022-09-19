export const addToFav = (userName, userImage, title, img, _id, price, handleAdded, handleNotAdded, e, setFavProducts) => {
    e.preventDefault()
    let favs = JSON.parse(localStorage.getItem('favList'))
    console.log('favs', favs)
    if(!favs.length){
        localStorage.setItem("favList", JSON.stringify([{ userName, userImage, title, img, _id, price}]))
        setFavProducts(JSON.parse(localStorage.getItem("favList")))
    } else {
        let finded = favs.find(item => item._id === _id)
        if(finded){
            let removed = favs.filter(item => item !== finded)
            localStorage.removeItem("favList")
            localStorage.setItem("favList", JSON.stringify([...removed]))
            setFavProducts(JSON.parse(localStorage.getItem("favList")))
        } else {
            localStorage.setItem("favList", JSON.stringify([...favs,{ userName, userImage, title, img, _id, price}]))
            setFavProducts(JSON.parse(localStorage.getItem("favList")))
        }
    }
    // let favs = JSON.parse(localStorage.getItem('favList'))
    // console.log('favs', favs)
    // if (favs) {
    //     if (favs.length >= 30) {
    //         handleNotAdded()
    //         return
    //     }
    //     if (!favs.some(item => item.id === _id)) {
    //         favs.concat(...{ userName, userImage, title, img, _id, price})
    //     }
    // } else {
    //     favs = [{ userName, userImage, title, img, _id, price}]
    // }
    // localStorage.setItem('favList', JSON.stringify(favs))
    // handleAdded()
}

export const addToCart = (userName, userImage, title, img, _id, price, color, handleAdded, handleNotAdded) => {
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

export const getPrice = () => {
    let total = 0
    JSON.parse(localStorage.getItem('cartList')).forEach(e => {
        total += e.price * e.quantity
    })
    return total.toFixed(2)
}

