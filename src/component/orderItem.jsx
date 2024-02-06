function OrderItem (props) {

    const{
        displayName,
        quantity,
        price,
    } = props
    
    
    return <div className="orderAll__item"> 
    <div className="">{displayName}</div>
    <div className="">в кількості {quantity} шт</div>
    <div className="">за ціною {price} грн за 1 шт</div>
    <div className="">На загальну суму: {price*quantity} грн</div>
    
    
    </div>
    
    }
    
    export default OrderItem