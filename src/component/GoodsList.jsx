import GoodsCard from "./GoodsCard" 
import React, {useState} from "react"






function GoodsList (props){

const {goods = [], addToCorzina = Function.prototype, closeAlert = Function.prototype} = props
let [quantity, quantityState] = useState("16")

console.log(quantity)


const PlusQ = ()=>{
    quantityState(++ quantity)
}
const MinusQ = ()=>{
    quantityState(-- quantity)
}


const VaidQuantity = () => {
    if (quantity >= goods.length){
        return quantity = goods.length
    } 
    if (quantity <= 1){
        return quantity = 1
    } 
}
VaidQuantity()



    return   <div className="boxcards">
<div className="quantity">

<p>введіть кількість позицій</p>
<button 
onClick={()=>MinusQ()}
className="boxcards__btn">-</button>

<input 
    className="inputquantity"
    id="input" 
    type="text" 
    value={quantity}
    onChange={(e)=> quantityState(e.target.value)}
></input>
<button 
onClick={()=>PlusQ()}
className="boxcards__btn">+</button>   
</div>
    <div className ="boxcard">
    
    {goods.length ? (
    [...goods].splice(0, quantity)
        ).map(item => (<GoodsCard 
    key={item.offerId}{...item} 
    addToCorzina={addToCorzina}
    closeAlert={closeAlert}
    
    />))
    : <div className="nothing"><h3>Нічого не знайдено, <br/> або немає підключення до мережі</h3></div>
    }
    </div>
   </div>



   
   }
   
   
   export default GoodsList