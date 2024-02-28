export function reducer(state, {type, payload}){
   
    
switch (type){


    case 'SET_GOODS': 
    return{
        ...state,
        goods: payload || [],
        loading: false
    }


    case 'CLOSE_ALERT': 
        return {
            ...state,
            alertName: ''
        }

    case 'REMOVE_FROM_BASKET':
        return {
            ...state,
            order: state.order.filter(el => el.offerId !==payload.offerId)
        }   
        
    case 'ADD_ORDER_LIST': 
        return {
            ...state,
            orderAdd: !state.orderAdd
        }

    case 'ADD_TO_BASKET':
        { 
            const itemIndex = state.order.findIndex((orderItem)=>orderItem.offerId === payload.offerId);

            let newOrder = null;
            if (itemIndex < 0){
                const newItem = {...payload, quantity: 1}
                newOrder = [...state.order, newItem]
            
            } else {
                newOrder = state.order.map((orderItem, index)=>{
                    if(index === itemIndex){
                        return{
                            ...orderItem, 
                            quantity: orderItem.quantity + 1
                        }
                    } else {
                        return orderItem
                    }
                })
            }

        return {
            ...state,
            order: newOrder,
            alertName: payload.displayName
        }

        }

    case 'ADD_BASKET_ITEM': 
        return {
            ...state,
            order: state.order.map(el=>{
                if(el.offerId === payload.offerId){
                    const newQuantity = el.quantity + 1
                    return {...el, quantity: newQuantity}
                } else {return el}
            })
        }

    case 'REM_BASKET_ITEM': 
        return {
            ...state,
            order: state.order.map(el=>{
                if(el.offerId === payload.offerId){
                    const newQuantity = el.quantity - 1
                    return {...el, quantity: newQuantity >= 0 ? newQuantity : 0}
                } else {return el}
            })

        }

    case 'TOGGLE_BASKET':
            return {
                ...state,
                isBasketShow: !state.isBasketShow
            }



    default:
        return state
}


}