import React, { useContext, useState } from "react";
import { Header } from "../../components/Header/Header";
import { Footer } from "../../components/Footer/Footer";
import { Button } from "../../components/Button/Button";
import {Container, Address, Payment, Restaurant, Paragraph, ButtonSection} from './style'
import { CartCard } from "../../components/CartCard/CartCard";
import GlobalContext from "../../context/GlobalContext";


const CartPage = () => {
    const [paymentType, setPaymentType] = useState("")
    const {showOrder, setShowOrder} = useContext(GlobalContext)
    const [confirmButton, setConfirmButton] = useState(true)
    
    const finishOrder = () => {
        localStorage.setItem("orderInProgress", "false")
        location.reload()
    }

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
        localStorage.setItem("orderInProgress", "true")
        localStorage.removeItem("ProductCart")
        setTimeout(() => finishOrder(), 10000)
    }
    console.log(JSON.parse(localStorage.getItem("ProductCart")))
    return(
        <Container>
            <Header showArrow={'false'} showTitle={'true'} title={'Meu carrinho'}/>
            <Address>
                <p>Endereço de entrega</p>
                <p></p>
            </Address>

            {JSON.parse(localStorage.getItem("ProductCart")).length === 0 && <Paragraph>Carrinho vazio</Paragraph>}

            {JSON.parse(localStorage.getItem("ProductCart")).length > 0 && (
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
                {JSON.parse(localStorage.getItem("ProductCart")).length === 0?
                <Button color={'rgba(92, 182, 70, 0.5)'} buttonTitle={'Confirmar'}/>
                :
                <div onClick={handleOrder}>
                    <Button color={'#5CB646'} buttonTitle={'Confirmar'}/>
                </div>
                }

            </ButtonSection>

            <Footer color1={'#B8B8B8'} color2={'#5CB646'} color3={'#B8B8B8'}/>
        </Container>
    )
}

export default CartPage;