import Robot from "../../assets/img/robot-image1.jpeg";
import "./index.scss";

export const Header = () => {
    return (
        <header>
            <img src={Robot} alt="Robot Image" />

            <div>
                <h1>Futuro Tecnologias</h1>
                <p>O futuro está se aproximando rapidamente e uma nova era de inovação e ruptura digital chegou.</p>
            </div>
        </header>
    )
}