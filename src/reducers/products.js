import callAPI from './../utils/apiCaller';

var initialState = [
    {id:1, name:'Kaito', quantity:6, status: true},
    {id:2, name:'Danto', quantity:6, status: true}
];


const product = (state = initialState, action) =>{
    let history = action.history;
    switch(action.type){
        case "ADD_PRODUCT": callAPI('products','POST',action.product).then(res=>{
            history.push('/product')
        })
        default: return [...state];
    }
}

export default product;