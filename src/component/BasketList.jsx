import {useContext} from "react"
import {ShopContext} from '../context'
import BasketItem from "./BasketItem"




function BasketList() {

const {
    order,
    AddOrderList
} = useContext(ShopContext)


const totalPrice = order.reduce((sum, el)=>{
    return sum + el.price * el.quantity
}, 0)


    return <div className="basketcollection">
    <ul className="">
        <li  className="basketcollection__corz">Корзина </li>
    
        {order.length ? order.map(item => (<BasketItem key={item.offerId} 
        {...item} />

        )) : <li  className="basketcollection__item">Корзина пуста</li>

        }
        <div className="basketcollection__corz__down">
          <div className="basketcollection__corz__down__price"> Загальна вартість: {totalPrice} грн </div> 
          <div className="basketcollection__corz__down__btn"> 
          <button onClick={()=>{AddOrderList()}} className="basketcollection__corz__down__btn__btnorder"> ЗАМОВИТИ </button></div>
            


        </div>
    </ul>

     </div>
}

export default BasketList