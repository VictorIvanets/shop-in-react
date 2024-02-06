
function Corz(props){
    const {quantity = 0, handeBasketShow = Function.prototype} = props

    return <div className="corz" onClick={handeBasketShow}>
        {quantity ? <h2 className="corz__num">{quantity}</h2> : null}
            

    </div>
}

export default Corz