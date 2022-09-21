import React, { useState } from "react";
import { Header } from "../../components/Header/Header";
import { Footer } from "../../components/Footer/Footer";
import { Button } from "../../components/Button/Button";
import {Container, Address, Payment, Restaurant, Paragraph, ButtonSection} from './style'
import { CartCard } from "../../components/CartCard/CartCard";


const CartPage = () => {
    const [emptyCart, setEmptyCart] = useState(false)
    const [paymentType, setPaymentType] = useState("")

    const handleOrder = () => {
        // https://us-central1-missao-newton.cloudfunctions.net/{{appName}}/restaurants/:restaurantId/order
        //headers: auth token
        /*body: {
            "products": [{
                "id": "CnKdjU6CyKakQDGHzNln",
                "quantity": 10
            }, {
                "quantity": 1,
                "id": "KJqMl2DxeShkSBevKVre"
            }],
            "paymentMethod": "creditcard"
        }*/

        //axios.post(url, body, headers)
    }

    return(
        <Container>
            <Header showArrow={'false'} showTitle={'true'} title={'Meu carrinho'}/>
            <Address>
                <p>Endereço de entrega</p>
                <p></p>
            </Address>

            {emptyCart && <Paragraph>Carrinho vazio</Paragraph>}

            {!emptyCart && (
                <>
                    <Restaurant>
                        <p>Nome do restaurante</p>
                        <p>Rua Fradique Coutinho, 125 - Vila Madalena</p>
                        <p>30-45 min</p>
                    </Restaurant>
                    <CartCard/>
                </>
            )}

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

            <ButtonSection>
                {emptyCart?
                <Button color={'rgba(92, 182, 70, 0.5)'} buttonTitle={'Confirmar'}>Confirmar</Button>
                : 
                <Button color={'#5CB646'} buttonTitle={'Confirmar'} onClick={handleOrder}>Confirmar</Button>}
            </ButtonSection>

            <Footer color1={'#B8B8B8'} color2={'#5CB646'} color3={'#B8B8B8'}/>
        </Container>
    )
}

export default CartPage;