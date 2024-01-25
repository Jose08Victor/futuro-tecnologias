import { ButtonDefault } from "../../button-default"
import robot2 from "../../../assets/img/robot-image2.jpeg";
import robot3 from "../../../assets/img/robot-image3.jpeg";
import "./index.scss"

export const Section1 = () => {
    return (
        <section className="section-1">
            <div className="description">
                <p className="text-1">AUTOMAÇÃO DE PROCESSOS ROBÓTICOS</p>

                <h2>Os robôs podem substituir o RH?</h2>

                <p className="text-2">
                    Automação e inteligência artificial são temas importantes hoje em dia.
                    <br />
                    Esta transformação tem amplos impactos.
                </p>

                <p className="text-3">O futuro está se aproximando rapidamente e uma nova era de inovação e ruptura digital chegou. Ou, mais precisamente, de acordo com Josh Bersin, “O futuro do trabalho já está aqui”. Então, sim, os robôs estão chegando. Esses robôs não são máquinas físicas; eles são "bots" de software instalados em computadores desktop ou na nuvem que podem ser configurados para automatizar tarefas cada vez mais complexas, como mover, manipular e validar dados.</p>

                <ButtonDefault Link="https://hrdailyadvisor.blr.com/2017/10/05/robots-replace-hr" />
            </div>

            <div className="robot-images">
                <img src={robot2} alt="Robot image 2" />

                <img src={robot3} alt="Robot image 3" />
            </div>
        </section>
    )
}