export const initialState = { 
    basket:[],
    user:null
}

export const getBasketTotal = (basket) => basket.reduce((amount,item)=> item.price+amount,0);

const reducer = (state, action)=> { 
    switch (action.type) {
        case "SET_USER" : 
            return { 
                ...state,
                user:action.user
            }
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