import {useEffect, useContext} from "react"
import {API_KEY, API_URL} from "../config"
import Preloader from "./preloader"
import GoodsList from "./GoodsList"
import Corz from "./corzin"
import BasketList from "./BasketList"
import Alert from "./alert"
import Order from "./order"
import {ShopContext} from "../context"


function Shop (){
const {loading, setGoods, order, isBasketShow, alertName, orderAdd} = useContext(ShopContext)



useEffect (function getGoods(){
fetch(API_URL, {headers: {Authorization: API_KEY}})
.then((response)=> response.json())
.then((data)=>{
    setGoods(data.shop)
}).catch((err)=>{
    // setLoading(false)
})
// eslint-disable-next-line
},[])


    return   <div  className="App">
            <Corz />
            {alertName && <Alert />}

            <main className ="container content">
    
            {loading ? <Preloader/> : <GoodsList />}
            {isBasketShow && <BasketList/>}
            {orderAdd && <Order order = {order} />}

            </main>
   </div>
   
   }
   
   
   export default Shop