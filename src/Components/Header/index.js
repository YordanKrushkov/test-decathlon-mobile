import './index.scss';
import { FiMenu } from "react-icons/fi";
import { AiOutlineSearch, AiOutlineQuestionCircle, AiOutlineShoppingCart } from "react-icons/ai";
import logo from '../../Assets/images/Logo.jpg';
import { RiUser3Line } from "react-icons/ri";
import { FaRegBuilding } from "react-icons/fa";

const Header = () => {
    return (
        <div>
            <div id="headerWrapper">
                <div>
                    <div id="menu">
                        <FiMenu />
                        <h5>Menu</h5>
                    </div>
                    <img src={ logo } alt="decathlon logo" />
                    <div id="searchBar">
                        <AiOutlineSearch />
                    </div>
                </div>
                <div id="headerNav">
                    <nav>
                        {/* <span>
                            <AiOutlineQuestionCircle />
                            <h5>Contact us</h5>
                        </span>
                        <span>
                            <FaRegBuilding />
                            <h5>Find a store</h5>
                        </span>
                        <span>
                            <RiUser3Line />
                        </span> */}
                        <span>
                            <AiOutlineShoppingCart />
                            <div></div>
                        </span>
                    </nav>
                </div>
            </div>
        </div>

    );
}

export default Header;