import {useEffect, useState} from "react"
import {API_KEY, API_URL} from "../config"
import Preloader from "./preloader"
import GoodsList from "./GoodsList"
import Corz from "./corzin"
import BasketList from "./BasketList"
import Alert from "./alert"
import Order from "./order"

function Shop (){
const [goods, setGoogs] = useState([])
const [loading, setLoading] = useState(true)
const [order, setOrder] = useState([])
const [isBasketShow, setBasketShow] = useState(false)
const [alertName, setAlertName] = useState('')
const [orderAdd, setOrderAdd] = useState(false)

const removeFromBasket = (itemId)=>{
    const newOrder = order.filter(el => el.offerId !==itemId)
    setOrder(newOrder)
}

const AddOrderList = ()=>{
    setOrderAdd(!orderAdd)
}

const addBasketItem = (itemId)=>{
    const add = order.map(el=>{
        if(el.offerId === itemId){
            const newQuantity = el.quantity + 1
            return {...el, quantity: newQuantity}
        } else {return el}
    })
    setOrder(add)
}

const remBasketItem = (itemId)=>{
    const add = order.map(el=>{
        if(el.offerId === itemId){
            const newQuantity = el.quantity - 1
            return {...el, quantity: newQuantity >= 0 ? newQuantity : 0}
        } else {return el}
    })
    setOrder(add)
}


const closeAlert = ()=>{
    setAlertName('')
}



const handeBasketShow = () =>{
    setBasketShow(!isBasketShow)
}

const addToCorzina = (item) => {
    const itemIndex = order.findIndex((orderItem)=>orderItem.offerId === item.offerId)

if (itemIndex < 0){
    const newItem = {...item, quantity: 1}

    setOrder([...order, newItem])

} else {
    const newOrder = order.map((orderItem, index)=>{
        if(index === itemIndex){
            return{
                ...orderItem, 
                quantity: orderItem.quantity + 1
            }
        } else {
            return orderItem
        }
    })
    setOrder(newOrder)
}
setAlertName(item.displayName)
}




useEffect (function getGoods(){
fetch(API_URL, {headers: {Authorization: API_KEY}})
.then((response)=> response.json())
.then((data)=>{
    data.shop && setGoogs(data.shop)
    setLoading(false)
}).catch((err)=>{
    setLoading(false)})
},[])


    return   <div  className="App">
            <Corz quantity={order.length} handeBasketShow={handeBasketShow}/>

            {alertName && <Alert displayName={alertName} closeAlert={closeAlert}/>}

            <main className ="container content">
    
            {loading ? <Preloader/> : <GoodsList 
            goods = {goods} 
            addToCorzina={addToCorzina}
            closeAlert={closeAlert}
            />}
            {
                isBasketShow && <BasketList 
                order = {order} 
                handeBasketShow={handeBasketShow} 
                removeFromBasket={removeFromBasket}
                addBasketItem={addBasketItem}
                remBasketItem={remBasketItem}
                AddOrderList={AddOrderList}
                />
            }

                {orderAdd && <Order order = {order}
                
                />}

            </main>
   </div>
   
   }
   
   
   export default Shop