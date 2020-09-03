export const initialState = { 
    basket:[{
        id:"12345",
        price:3400,
        rating:4,
        title:'KRK Classic 5 Professional Bi-Amp 5" Powered Studio Monitor',
        image:'https://images-na.ssl-images-amazon.com/images/I/814xI4eejuL._SL1500_.jpg'
    }],
    user:null
}

export const getBasketTotal = (basket) => basket.reduce((amount,item)=> item.price+amount,0);

const reducer = (state, action)=> { 
    switch (action.type) {
        case "ADD_TO_BASKET":
            return { 
                state,
                basket : [...state.basket, action.item]
            }
        case "REMOVE_FROM_BASKET":
            let newBasket = [...state.basket];
            let index = state.basket.findIndex((basketitem)=> basketitem.id === action.id);
            if (index >= 0) {
                // product exists
                newBasket.splice(index,1);
            }
            return{
                ...state,
                basket:newBasket
            }
        default:
            return state;
    }
}

export default reducer;