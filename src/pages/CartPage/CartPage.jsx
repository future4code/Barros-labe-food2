import React, { useState } from "react";
import { Header } from "../../components/Header/Header";
import {Address, Payment, Paragraph, Footer} from './style'
import {BsHouseDoor, BsCart3, BsPerson} from 'react-icons/all'


const CartPage = () => {
    const [emptyCart, setEmptyCart] = useState(true)
    const [paymentType, setPaymentType] = useState("")

    return(
        <>
            <Header showArrow={'false'} showTitle={'true'} title={'Meu carrinho'}/>
            <Address>
                <p>Endereço de entrega</p>
                <p></p>
            </Address>

            {emptyCart && <Paragraph>Carrinho vazio</Paragraph>}

            <Payment>
                <span>Frete R$0,00</span>
                <section>
                    <p>SUBTOTAL</p>
                    <p>R$00,00</p>
                </section>
                <form>
                    <p>Forma de pagamento</p>
                    <div>
                        <input type="radio" name="dinheiro" value={"dinheiro"} onChange={e => setPaymentType(e.target.value)}/>
                        <label htmlFor="dinheiro">Dinheiro</label>
                    </div>
                    <div>
                        <input type="radio" name="cartao" value={"cartao"} onChange={e => setPaymentType(e.target.value)}/>
                        <label htmlFor="cartao">Cartão de crédito</label>
                    </div>
                </form>
            </Payment>

            <Footer>
                <button>Confirmar</button>
                <div>
                    <BsHouseDoor/>
                    <BsCart3/>
                    <BsPerson/>
                </div>
            </Footer>
        </>
    )
}

export default CartPage;