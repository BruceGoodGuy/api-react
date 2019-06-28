const addProduct = (product, history) =>  {
    return {
        type: 'ADD_PRODUCT',
        product,
        history
    }
}

module.exports = {
    addProduct: addProduct
}