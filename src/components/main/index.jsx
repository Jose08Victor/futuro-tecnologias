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

import gadgetImage1 from "../../assets/gadget-image1.jpeg";
import gadgetImage2 from "../../assets/gadget-image2.jpeg";
import gadgetImage3 from "../../assets/gadget-image3.jpeg";
import gadgetImage4 from "../../assets/gadget-image4.jpeg";

import appliances from "../../assets/appliances.jpeg";
import quote from "../../assets/quote.svg";

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
                        <p className="text-1">TRANSPORTE</p>

                        <h2>Caminhões elétricos tesla</h2>

                        <p className="text-2">O Semi da Tesla teve um começo promissor, apesar de ainda não haver informações oficiais de preços disponíveis.</p>

                        <p className="text-3">A Tesla disse que seu custo de operação para o Semi ajudará os remetentes a economizar dinheiro por milha imediatamente, e isso provavelmente ajudará a diminuir o impacto do choque do adesivo quando finalmente revelar o preço inicial. Mas, como mencionei com o piloto do Walmart, que envolverá um teste de 15 caminhões Semi nos EUA e Canadá, há valor adicional em ajudar esses grandes transportadores a cumprir suas metas verdes.</p>

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

            <section className="section-4">
                <div className="containers">
                    <div className="container1">
                        <div>
                            <h3>MÁQUINAS FAZEM MELHOR</h3>

                            <p>O RPA pode ser uma atualização sobre os humanos quando a precisão e a velocidade contam - não apenas no processamento de transações, mas também em tarefas mais complexas, como relatórios regulatórios e gerenciamento de contratos.</p>
                        </div>

                        <div>
                            <h3>SOLUÇÕES “QUICK WIN”</h3>

                            <p>Essas tecnologias podem escalar rapidamente, fornecer um meio de capturar experiência operacional para uma implantação mais ampla e fornecer serviços globalmente em uma programação 24/7 em vários idiomas.</p>
                        </div>

                        <div>
                            <h3>SERVIÇOS DE ALTO IMPACTO</h3>

                            <p>A automatização de partes do processo de compensação anual permite a redistribuição de recursos de RH para focar no treinamento de gerentes e no desenvolvimento de planos de ação de engajamento.</p>
                        </div>
                    </div>

                    <div className="container2">
                        <h3>Os robôs estão chegando</h3>

                        <p>A automação de processos robóticos (RPA) funciona no nível da interface do usuário, preenche a lacuna entre tecnologias díspares e executa processos repetitivos baseados em regras.</p>
                    </div>
                </div>
            </section>

            <section className="section-5">
                <div className="gadget-images">
                    <img src={gadgetImage1} alt="Gadget Image 1" />

                    <img src={gadgetImage2} alt="Gadget Image 2" />

                    <img src={gadgetImage3} alt="Gadget Image 3" />

                    <img src={gadgetImage4} alt="Gadget Image 4" />
                </div>

                <div className="description">
                    <p className="text-1">GADGETES</p>

                    <h2>Gadgets do futuro</h2>

                    <p className="text-2">A tecnologia está se desenvolvendo em uma velocidade enorme e você nunca sabe o que está por vir, digamos, por exemplo, em 2020.</p>

                    <p className="text-3">Um dos que gostam de refletir sobre o futuro da tecnologia é o designer francês Josselin Zaigouche que decidiu projetar este gadget incrível, apelidado de Apple Black Hole (e não é porque vai cair tão bem se chegar ao mercado). O nome provavelmente foi inspirado nas inúmeras aplicações que podem ser encontradas nos aparelhos da Apple (como iPhone e iPad).</p>

                    <ButtonDefault />
                </div>
            </section>

            <section className="section-6">
                <div className="container1">
                    <div className="content">
                        <h3>5 tecnologias futuras que se tornarão populares</h3>

                        <div>
                            <p>As empresas de tecnologia tocaram no início do novo ano, revelando alguns de seus planos ambiciosos para os próximos meses. Startups e empresas multinacionais estão começando a sentir os efeitos em cascata da inovação na indústria, com a tecnologia se tornando mais interligada na vida cotidiana a cada ano.
                            <br />
                            <br />
                            À medida que 2018 avança, aqui estão 5 tecnologias futuras que você pode esperar alcançar o público nos próximos anos.</p>
                        </div>
                    </div>
                </div>

                <ul className="container2">
                    <li>
                        <h4>1. A Internet</h4>

                        <p>A Internet das Coisas há muito tempo é mencionada entre os especialistas em tecnologia como a próxima grande inovação em tecnologia doméstica.</p>
                    </li>

                    <li>
                        <h4>2. Automação</h4>

                        <p>Embora a inovação em larga escala na automação tenha sido tradicionalmente limitada ao lado da produção da sociedade.</p>
                    </li>

                    <li>
                        <h4>3. Criptomoeda</h4>

                        <p>Após o salto meteórico do preço do Bitcoin em 2017, os principais jogadores de tecnologia começaram a levar as criptomoedas a sério.</p>
                    </li>

                    <li>
                        <h4>4. Blockchain</h4>

                        <p>Blockchain, o livro-razão descentralizado que reúne criptomoedas, tem aplicativos que alcançam.</p>
                    </li>

                    <li>
                        <h4>5. AI</h4>

                        <p>A inteligência artificial está vendo a luz e as aplicações da tecnologia já estão sendo trabalhadas.</p>
                    </li>
                </ul>

                <div className="container3">
                    <div className="content">
                        <div>
                            <img src={quote} alt="Quote" />

                            <p>A tecnologia mudou para sempre o mundo em que vivemos. Estamos online, de uma forma ou de outra, o dia todo. Nossos telefones e computadores tornaram-se reflexos de nossas personalidades, nossos interesses e nossas identidades. Eles guardam muito do que é importante para nós.</p>

                            <p className="autor">James Comey</p>
                        </div>

                        <img src={appliances} alt="Appliances" />
                    </div>
                </div>
            </section>
        </main>
    )
}