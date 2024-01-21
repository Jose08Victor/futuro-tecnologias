import "./index.scss"
import { ButtonDefault } from "../button-default";
import robot2 from "../../assets/robot-image2.jpeg";
import robot3 from "../../assets/robot-image3.jpeg";
import lamp from "../../assets/lamp.svg";
import car from "../../assets/car.svg";
import mind from "../../assets/mind.svg";
import electricTruck from "../../assets/electric-truck.jpeg";
import electricCarImage1 from "../../assets/electric-car-image1.jpeg";
import electricCarImage2 from "../../assets/electric-car-image2.jpeg";
import electricCarImage3 from "../../assets/electric-car-image3.jpeg";
import electricCarImage4 from "../../assets/electric-car-image4.jpeg";
import electricCarImage5 from "../../assets/electric-car-image5.jpeg";

export const Main = () => {
    return (
        <main>
            <section className="section-1">
                <div className="description">
                    <p className="text-1">AUTOMAÇÃO DE PROCESSOS ROBÓTICOS</p>

                    <h2>Os robôs podem substituir o RH?</h2>

                    <p className="text-2">Automação e inteligência artificial são temas importantes hoje em dia.
                        <br />
                        Esta transformação tem amplos impactos.</p>

                    <p className="text-3">O futuro está se aproximando rapidamente e uma nova era de inovação e ruptura digital chegou. Ou, mais precisamente, de acordo com Josh Bersin, “O futuro do trabalho já está aqui”. Então, sim, os robôs estão chegando. Esses robôs não são máquinas físicas; eles são "bots" de software instalados em computadores desktop ou na nuvem que podem ser configurados para automatizar tarefas cada vez mais complexas, como mover, manipular e validar dados.</p>

                    <ButtonDefault />
                </div>

                <div className="robot-images">
                    <img src={robot2} alt="Robot image 2" />

                    <img src={robot3} alt="Robot image 3" />
                </div>
            </section>

            <section className="section-2">
                <div className="card">
                    <img src={lamp} alt="Lamp Icon" />

                    <div>
                        <h3>Tecnologias</h3>

                        <p>O espaço de tecnologia é há muito tempo o setor mais estimulante e assistido há vários anos. As inovações no setor mudaram radicalmente a forma como vivemos. Em muitos casos, ela criou setores e serviços completamente novos.</p>
                    </div>
                </div>

                <div className="card">
                    <img src={car} alt="Car Icon" />

                    <div>
                        <h3>Carros do Futuro</h3>

                        <p>A Tesla revelou recentemente seu caminhão pesado totalmente elétrico após meses de atrasos e provocações. O Tesla Semi apresenta um visual impressionante e é um desafio ambicioso para a indústria de transporte.</p>
                    </div>
                </div>

                <div className="card">
                    <img src={mind} alt="Mind Icon" />

                    <div>
                        <h3>Robôs AI</h3>

                        <p>O espaço de tecnologia é há muito tempo o setor mais estimulante e assistido há vários anos. As inovações no setor mudaram radicalmente a forma como vivemos. Em muitos casos, ela criou setores e serviços completamente novos.</p>
                    </div>
                </div>
            </section>

            <section className="section-3">
                <div className="electric-truck-image-and-description">
                    <img src={electricTruck} alt="Electric Truck" />

                    <div>
                        <p>TRANSPORTE</p>

                        <h2>Caminhões elétricos tesla</h2>

                        <p>O Semi da Tesla teve um começo promissor, apesar de ainda não haver informações oficiais de preços disponíveis.</p>

                        <p>A Tesla disse que seu custo de operação para o Semi ajudará os remetentes a economizar dinheiro por milha imediatamente, e isso provavelmente ajudará a diminuir o impacto do choque do adesivo quando finalmente revelar o preço inicial. Mas, como mencionei com o piloto do Walmart, que envolverá um teste de 15 caminhões Semi nos EUA e Canadá, há valor adicional em ajudar esses grandes transportadores a cumprir suas metas verdes.</p>

                        <ButtonDefault />
                    </div>
                </div>

                <div className="cars-images">
                    <img src={electricCarImage1} alt="Electric Car Image 1" />                
                    <img src={electricCarImage2} alt="Electric Car Image 2" />
                    <img src={electricCarImage3} alt="Electric Car Image 3" />
                    <img src={electricCarImage4} alt="Electric Car Image 4" />
                    <img src={electricCarImage5} alt="Electric Car Image 5" />
                </div>
            </section>
        </main>
    )
}