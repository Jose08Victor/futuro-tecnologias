import appliances from "../../../assets/img/appliances.jpeg";
import quote from "../../../assets/svg/quote.svg";
import "./index.scss"

export const Section6 = () => {
    return (
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
    )
}