import callAPI from './../utils/apiCaller';

var initialState = [
];


const product = (state = initialState, action) =>{
    let history = action.history;
    switch(action.type){
        case "SAVE_PRODUCT": state = action.data; return [...state]; break;
        case "ADD_PRODUCT": callAPI('products','POST',action.product).then(res=>{
            history.push('/product')
        }); break;
        default: return [...state];
    }
}

export default product;