import electricTruck from "../../../assets/img/electric-truck.jpeg";
import electricCarImage1 from "../../../assets/img/electric-car-image1.jpeg";
import electricCarImage2 from "../../../assets/img/electric-car-image2.jpeg";
import electricCarImage3 from "../../../assets/img/electric-car-image3.jpeg";
import electricCarImage4 from "../../../assets/img/electric-car-image4.jpeg";
import electricCarImage5 from "../../../assets/img/electric-car-image5.jpeg";
import { ButtonDefault } from "../../button-default";
import "./index.scss"

export const Section3 = () => {
    return (
        <section className="section-3">
            <div className="electric-truck-image-and-description">
                <img src={electricTruck} alt="Electric Truck" />

                <div>
                    <p className="text-1">TRANSPORTE</p>

                    <h2>Caminhões elétricos tesla</h2>

                    <p className="text-2">O Semi da Tesla teve um começo promissor, apesar de ainda não haver informações oficiais de preços disponíveis.</p>

                    <p className="text-3">A Tesla disse que seu custo de operação para o Semi ajudará os remetentes a economizar dinheiro por milha imediatamente, e isso provavelmente ajudará a diminuir o impacto do choque do adesivo quando finalmente revelar o preço inicial. Mas, como mencionei com o piloto do Walmart, que envolverá um teste de 15 caminhões Semi nos EUA e Canadá, há valor adicional em ajudar esses grandes transportadores a cumprir suas metas verdes.</p>

                    <ButtonDefault Link="https://techcrunch.com/2017/11/18/canadian-grocery-chain-orders-25-tesla-electric-semi-trucks/" />
                </div>
            </div>

            <ul className="cars-images">
                <li><img src={electricCarImage1} alt="Electric Car Image 1" /></li>
                <li><img src={electricCarImage2} alt="Electric Car Image 2" /></li>
                <li><img src={electricCarImage3} alt="Electric Car Image 3" /></li>
                <li> <img src={electricCarImage4} alt="Electric Car Image 4" /></li>
                <li> <img src={electricCarImage5} alt="Electric Car Image 5" /></li>
            </ul>
        </section>
    )
}