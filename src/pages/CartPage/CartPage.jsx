import React from "react";
import { Header } from "../../components/Header/Header";


const CartPage = () => {
    return(
        <>
            <Header showArrow={'false'} showTitle={'true'} title={'Meu carrinho'}/>
            <h1>Carrinho</h1>
        </>
    )
}

export default CartPage;