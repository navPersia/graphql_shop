exports.Category = {
    products: (parent, {filter}, {products}) => {
        const categoryId = parent.id;

        let filterProducts = products.filter((product) => product.categoryId === categoryId);;

        if (filter){
            if(filter.onSale === true){
                filterProducts = filterProducts.filter((product) => product.onSale === true);
            }
            else{
                filterProducts = filterProducts.filter((product) => product.onSale === false);
            }
        }

        return filterProducts;
    }
}