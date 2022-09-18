function handleErrors({userName, userImage, title, description, img, origin, technique, style, colors, releaseDate, price, tags, active}){
    let errors = {};
    var regEx2 = /^[a-zA-ZÀ-ÿ\u00f1\u00d1]+(\s*[a-zA-ZÀ-ÿ\u00f1\u00d1]*)*[a-zA-ZÀ-ÿ\u00f1\u00d1]+$/;
    //basic errors
    if(!userName){errors.userName = "Need an artist name"}
    if(!regEx2.test(userName)){ errors.userName = "Can't contain symbols" }
    //puntual errors
    var regEx = /^[0-9.]+$/
    if(!regEx.test(price)){
        errors.price = "Can't contain simbols"
    };
    if(!regEx.test(releaseDate)){
        errors.releaseDate = "Can't contain simbols"
    };
    var validImgRegEx = /(https?:\/\/.*\.(?:png|jpg))/i
    if(!validImgRegEx.test(userImage)){
        errors.userImage = "Invalid url"
    }
    if(!validImgRegEx.test(img)){
        errors.img = "Invalid url"
    }
    return errors
}

module.exports = {
    handleErrors
};