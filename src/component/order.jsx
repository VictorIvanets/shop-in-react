import OrderItem from "./orderItem"


function Order (props) {

 
const order = props.order
console.log(order)


return <div className="orderAll"> 
    <div className="">Ваше замовлення:</div>


{
// order.length ? 

order.map(item => (<OrderItem key={item.offerId} 
         {...item} />

        )) 
        // : <h1  className="basketcollection__item">Корзина пуста</h1>

        }


</div>

}

export default Order