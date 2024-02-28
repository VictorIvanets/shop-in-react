import {useEffect, useContext} from "react"
import {ShopContext} from '../context'



function Alert (){

    const {
        alertName,
        closeAlert
    } = useContext(ShopContext)


    
    useEffect(()=>{
        const timerId = setTimeout(closeAlert, 2000)
        return()=>{
            clearTimeout(timerId)
    }
    // eslint-disable-next-line
    }, [alertName])



return <div className="alert">

<div className="alert__content">Товар</div>
<div className="alert__content__name">{alertName}</div>
<div className="alert__content">Добавлен в корзину</div>
</div>


}

export default Alert