import lamp from "../../../assets/svg/lamp.svg";
import car from "../../../assets/svg/car.svg";
import mind from "../../../assets/svg/mind.svg";
import "./index.scss"

export const Section2 = () => {
    return (
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
    )
}