import callAPI from './../utils/apiCaller';

export const addProduct = (product, history) =>  {
    return {
        type: 'ADD_PRODUCT',
        product,
        history
    }
}

export const listProduct = () => {
    return {
        type: 'LIST_PRODUCT'
    }
}

export const saveToStore = (product) => {
    return {
        type: 'SAVE_PRODUCT',
        data: product
    }
}

export const getData = () => {
    return (dispatch) => {
        return callAPI('products','GET',null).then(res => {
            dispatch(saveToStore(res.data));
        })
    }
}