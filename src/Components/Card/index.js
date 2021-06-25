import { MdKeyboardArrowRight } from "react-icons/md";
import './index.scss'
const Card = ({x}) => {
    return (
        <section id="card">
            <img src={ x.img } alt="" />
            <h5>{ x.title }</h5>
            <p>{ x.description }</p>
            <a href="">See more <MdKeyboardArrowRight /></a>
        </section>
    );
}

export default Card;