import React, { useContext, useEffect, useState } from "react";
import { Header } from "../../components/Header/Header";
import { Footer } from "../../components/Footer/Footer";
import { Button } from "../../components/Button/Button";
import {Container, Address, Payment, Restaurant, Paragraph, ButtonSection} from './style'
import { CartCard } from "../../components/CartCard/CartCard";
import GlobalContext from "../../context/GlobalContext";
import axios from "axios";
import { BASE_URL } from "../../constants/constants";
import { token } from "../../constants/constants";


const CartPage = () => {
    const [paymentType, setPaymentType] = useState("")
    const [productsInCart, setProductsInCart] = useState(JSON.parse(localStorage.getItem("ProductCart")) || null)
    const {reload} = useContext(GlobalContext)
    
    useEffect(() => {
        setProductsInCart(JSON.parse(localStorage.getItem("ProductCart")))
    }, [reload])

    //Soma dos produtos adicionados ao carrinho
    const sum = productsInCart !== null && productsInCart.reduce((prev, num) => prev + (num.price * num.quantity), 0)
    
    //Quando o tempo de entrega se esgota
    const finishOrder = () => {
        localStorage.setItem("orderInProgress", "false")
        location.reload()
    }

    //Quando usuário clica no botão confirmar
    const handleOrder = () => {
        const products = productsInCart.map(product => {
            return (
                {
                    id: product.id,
                    quantity: product.quantity
                }
            )
        })

        const body = {
            products: products,
            paymentMethod: paymentType
        }
        
        axios.post(`${BASE_URL}/restaurants/${productsInCart[0].restaurantId}/order`, body, {
            headers: {
                auth: token
            }
        }).then((response) => {
            localStorage.setItem("orderInProgress", "true")
            localStorage.setItem("restaurantName", response.data.order.restaurantName)
            localStorage.setItem("price", response.data.order.totalPrice)
            localStorage.removeItem("ProductCart")
            setTimeout(() => finishOrder(), `${productsInCart[0].time * 60 * 1000}`)
        }).catch(err => alert(err))
    }
    
    return(
        <Container>
            <Header showArrow={'false'} showTitle={'true'} title={'Meu carrinho'}/>
            <Address>
                <p>Endereço de entrega</p>
                <p>{JSON.parse(localStorage.getItem("address"))}</p>
            </Address>

            {productsInCart === null && <Paragraph>Carrinho vazio</Paragraph>}

            {productsInCart !== null && (
                <>
                    <Restaurant>
                        <p>{productsInCart[0].restaurant}</p>
                        <p>{productsInCart[0].address}</p>
                        <p>{productsInCart[0].time} min</p>
                    </Restaurant>

                    {productsInCart.map((product, index) => {
                        return <CartCard
                                key={index}
                                img={product.photoUrl}
                                name={product.name}
                                units={product.quantity}
                                description={product.description}
                                price={product.price}
                            />
                    })}
                </>
            )}

            <Payment>
                <span>Frete R${productsInCart !== null? (productsInCart[0].shipping).toFixed(2) : '0,00'}</span>
                <section>
                    <p>SUBTOTAL</p>
                    <p>R${productsInCart !== null? (sum + productsInCart[0].shipping).toFixed(2) : '0,00'}</p>
                </section>
                <form>
                    <p>Forma de pagamento</p>
                    <div>
                        <input type="radio" name="dinheiro" value={"cash"} onChange={e => setPaymentType(e.target.value)}/>
                        <label htmlFor="dinheiro">Dinheiro</label>
                    </div>
                    <div>
                        <input type="radio" name="cartao" value={"creditcard"} onChange={e => setPaymentType(e.target.value)}/>
                        <label htmlFor="cartao">Cartão de crédito</label>
                    </div>
                </form>
            </Payment>

            <ButtonSection>
                {productsInCart === null?
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