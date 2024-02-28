import {createContext, useReducer} from "react"
import {reducer} from './reducer'


export const ShopContext = createContext()

const initialState = {
    goods:[],
    loading: true,
    order: [],
    isBasketShow: false,
    alertName: '',
    orderAdd: false
}


export const ContextProvider = ({children}) =>{
const [value, dispatch] = useReducer(reducer, initialState)


value.closeAlert = () => {
    dispatch({type: 'CLOSE_ALERT'})
}

value.removeFromBasket = (itemId) => {
    dispatch({type: 'REMOVE_FROM_BASKET', payload:{offerId: itemId}})
}

value.AddOrderList = ()=> {
    dispatch({type: 'ADD_ORDER_LIST'})
}

value.addToCorzina = (item) =>{
    dispatch({type: 'ADD_TO_BASKET', payload: item})
}

value.addBasketItem = (itemId) => {
    dispatch({type: 'ADD_BASKET_ITEM', payload:{offerId: itemId}})
}

value.remBasketItem = (itemId) => {
    dispatch({type: 'REM_BASKET_ITEM', payload:{offerId: itemId}})
    }

value.handeBasketShow = ()=> {
    dispatch({type: 'TOGGLE_BASKET'})
}

value.setGoods = (data)=>{
    dispatch({type: 'SET_GOODS', payload: data})
}


    return <ShopContext.Provider value={value}>
        {children}
    </ShopContext.Provider>
}