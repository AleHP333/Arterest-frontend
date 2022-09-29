function handleErrors({userImage, title, description, img, origin, technique, style, colors, releaseDate, price, tags}, touched){
    let errors = {};
    var regEx2 = /^[a-zA-ZÀ-ÿ\u00f1\u00d1]+(\s*[a-zA-ZÀ-ÿ\u00f1\u00d1]*)*[a-zA-ZÀ-ÿ\u00f1\u00d1]+$/;
    var regEx = /^[0-9.]+$/

    //TITLE
    if(!title && touched.title){errors.title = "Artwork needs a title"}
    if(!regEx2.test(title) && touched.title){ errors.userName = "Can't contain symbols" }
    //DESCRIPTION
    if(!description && touched.description){
        errors.description = "Needs a description"
    }
    if(description.length < 20 && touched.description){
        errors.description = "Be a little descriptive"
    }
    if(description.length > 1000 && touched.description){
        errors.description = "Max description"
    }
    //ORIGIN
    if(!origin && touched.origin){
        errors.origin = "Needs a country origin"
    }
    if(!origin.length && touched.origin){
        errors.origin = "Select an origin"
    }
    //PRICE
    if(!price.length && touched.price){
        errors.price = "Needs price"
    };
    if(!regEx.test(price) && touched.price){
        errors.price = "Can't contain simbols"
    };
    //RELEASE DATE
    if(!releaseDate.length && touched.releaseDate){
        errors.releaseDate = "Needs a release age"
    }
    if(!regEx.test(releaseDate) && touched.releaseDate){
        errors.releaseDate = "Can't contain simbols"
    };
    //TAGS
    if(tags.length > 3 && touched.tags){
        errors.tags = "Only 3 tags per picture"
    }
    //COLORS
    if(colors.length === 0 && touched.colors){
        errors.colors = "One color at least"
    }
    if(colors.length > 3 && touched.colors){
        errors.colors = "Only 3 colors per picture"
    }
    return errors
}

module.exports = {
    handleErrors
};