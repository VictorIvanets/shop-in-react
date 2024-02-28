import {useContext} from "react"
import {ShopContext} from '../context'




function Corz(){

    const {
        order,
        handeBasketShow,    
    } = useContext(ShopContext)


   const quantity = order.length

    return <div className="corz" onClick={handeBasketShow}>
        {quantity ? <h2 className="corz__num">{quantity}</h2> : null}
            

    </div>
}

export default Corz