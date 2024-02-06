
import BasketItem from "./BasketItem"
import Order from "./order"

function BasketList(props) {
const {
    order = [], 
    handeBasketShow = Function.prototype,
    removeFromBasket = Function.prototype,
    addBasketItem = Function.prototype,
    remBasketItem = Function.prototype,
    AddOrderList = Function.prototype,
} = props

const totalPrice = order.reduce((sum, el)=>{
    return sum + el.price * el.quantity
}, 0)





    return <div className="basketcollection">
    <ul className="">
        <li  className="basketcollection__corz">Корзина </li>
    
        {order.length ? order.map(item => (<BasketItem key={item.offerId} 
        removeFromBasket={removeFromBasket} 
        addBasketItem={addBasketItem} 
        remBasketItem={remBasketItem} {...item} />

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