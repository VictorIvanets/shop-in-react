
import {useContext} from "react"
import {ShopContext} from '../context'


function BasketItem(props){

const{
        offerId,
        displayName,
        quantity,
        price,
    } = props


const {removeFromBasket, 
    addBasketItem, 
    remBasketItem,
} = useContext(ShopContext)


return <div  className="basketcollection__item">

<div className="basketcollection__item__content"> 

<div className="basketcollection__item__content__name">{displayName}</div>


<div className="basketcollection__item__content__btn">
    <div className="basketcollection__item__content__btn__plus" onClick={()=>addBasketItem(offerId)}>+</div>
    <div className="">{quantity}</div>
    <div className="basketcollection__item__content__btn__plus" onClick={()=>remBasketItem(offerId)}>-</div>
</div> 

<div className="basketcollection__item__content__price"> = {`${price*quantity} грн`} </div> 

</div>

<div className="basketcollection__item__del" onClick={()=>removeFromBasket(offerId)}>X</div>

</div>


}


export default BasketItem