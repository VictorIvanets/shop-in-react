import OrderItem from "./orderItem"


function Order (props) {

 
const order = props.order
console.log(order)


return <div className="orderAll"> 
    <div className="">Ваше замовлення:</div>


{


order.map(item => (<OrderItem key={item.offerId} 
         {...item} />

        )) 


        }


</div>

}

export default Order