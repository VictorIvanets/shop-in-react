import {useEffect, useState} from "react"



function Alert (props){

const {
    offerId,
    displayName,
    quantity,
    price,
    closeAlert = Function.prototype,
} = props


    useEffect(()=>{
        const timerId = setTimeout(closeAlert, 2000)
        return()=>{
            clearTimeout(timerId)
    }

    }, [displayName])



return <div className="alert">

<div className="alert__content">Товар</div>
<div className="alert__content__name">{displayName}</div>
<div className="alert__content">Добавлен в корзину</div>
</div>


}

export default Alert