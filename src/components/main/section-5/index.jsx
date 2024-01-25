import gadgetImage1 from "../../../assets/img/gadget-image1.jpeg";
import gadgetImage2 from "../../../assets/img/gadget-image2.jpeg";
import gadgetImage3 from "../../../assets/img/gadget-image3.jpeg";
import gadgetImage4 from "../../../assets/img/gadget-image4.jpeg";
import { ButtonDefault } from "../../button-default"
import "./index.scss"

export const Section5 = () => {
    return (
        <section className="section-5">
            <ul className="gadget-images">
                <li><img src={gadgetImage1} alt="Gadget Image 1" /></li>

                <li><img src={gadgetImage2} alt="Gadget Image 2" /></li>

                <li><img src={gadgetImage3} alt="Gadget Image 3" /></li>

                <li><img src={gadgetImage4} alt="Gadget Image 4" /></li>
            </ul>

            <div className="description">
                <p className="text-1">GADGETES</p>

                <h2>Gadgets do futuro</h2>

                <p className="text-2">A tecnologia está se desenvolvendo em uma velocidade enorme e você nunca sabe o que está por vir, digamos, por exemplo, em 2020.</p>

                <p className="text-3">Um dos que gostam de refletir sobre o futuro da tecnologia é o designer francês Josselin Zaigouche que decidiu projetar este gadget incrível, apelidado de Apple Black Hole (e não é porque vai cair tão bem se chegar ao mercado). O nome provavelmente foi inspirado nas inúmeras aplicações que podem ser encontradas nos aparelhos da Apple (como iPhone e iPad).</p>

                <ButtonDefault Link="http://freakier.blogspot.com/2011/01/gadgets-of-future-black-hole-cell-phone.html" />
            </div>
        </section>
    )
}