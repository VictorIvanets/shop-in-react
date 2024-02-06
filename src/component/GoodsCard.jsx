function GoodsCard (props){


    const{
        mainType,
        offerId,
        displayName,
        displayType,
        addToCorzina = Function.prototype,
 
    } = props

    const img = props.granted[0].images.background
    const price = props.price.finalPrice
    const descr = props.granted[0].description // 

    return   <div className ="card">
    
    <div className="card__poster">
    
   <img className= "card__img" src={img} alt="poster" />

   </div>
   <div className="card__poster__type"><p>{mainType}</p></div>
   <div className="card__type">{displayType}</div>
   <div className="card__title">{displayName}</div>
   <div className="card__price"><div className="card__price__pr">{`${price} грн`}</div><div> <button className="card__price__btn" onClick={()=>
   {
    
    addToCorzina({offerId, displayName, price})
   
    }}>КУПИТИ</button> </div> </div>

   </div>
   
   }
   
   
   export default GoodsCard

//    { poster === 'N/A' ?
//     <img className= "card__img" src={`https://via.placeholder.com/200x280?text=${title}`} alt="poster" /> :
//    <img className= "card__img" src={poster} alt="poster" />
// }