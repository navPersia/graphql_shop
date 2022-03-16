const { reviews } = require("../db");

exports.Query = {
    hello: (parent, args, context) => {
        return "World"
    },
    products: (parent, {filter}, {products}) => {
        let filterProducts = products;
        if (filter){
            if(filter.onSale === true){
                filterProducts = filterProducts.filter((product) => product.onSale === true);
            }
            if(filter.onSale === false){
                filterProducts = filterProducts.filter((product) => product.onSale === false);
            }
            if([1,2,3,4,5].includes(filter.avgRating)){
                filterProducts = filterProducts.filter((product) => {
                    let sumRating = 0;
                    let numberOfReviews = 0;
                    reviews.forEach(review => {
                        if(review.productId === product.id) {
                            sumRating += review.rating;
                            numberOfReviews++;
                        }
                    });
                    const avgProductRating = sumRating / numberOfReviews;
                    return avgProductRating >= filter.avgRating;
                });
            }
        }
        return filterProducts;
    },
    product: (parent, args, {products}) => {
        const productId = args.id;
        const product = products.find(product => product.id === productId);
        if(!product)return null;
        return product;
    },
    categories: (parent, args, {categories}) => {
        return categories;
    },
    category: (parent, args, {categories}) => {
        const categoryId = args.id;
        const category = categories.find(category => category.id === categoryId);
        if(!category)return null;
        return category;
    },
}