import GoodsCard from "./GoodsCard" 



function GoodsList (props){

const {goods = [], addToCorzina = Function.prototype, closeAlert = Function.prototype} = props


    return   <div>
    <div className ="boxcard">
    {goods.length ? goods.map(item => (<GoodsCard 
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