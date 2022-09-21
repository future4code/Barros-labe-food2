import React from "react";
import imgProduct from "../../images/image.jpg";
import {Container} from './style'

export function CartCard() {
    return (
        <Container>
            <img src={imgProduct} alt={'Imagem do produto'}/>
            <section>
                <div>
                    <p>Nome produto</p>
                    <p>2</p>
                </div>

                <span>Descrição do produto, com mais detalhes. Descrição do produto, com mais detalhes.</span>
                
                <div>
                    <strong>R$49,90</strong>
                    <button>remover</button>
                </div>
            </section>
        </Container>
    )
}