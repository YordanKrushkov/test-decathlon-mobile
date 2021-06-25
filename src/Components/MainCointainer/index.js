import './index.scss';
import button from '../../Assets/images/buttonDiscover.png';
import group from '../../Assets/images/group.png';
import {Link} from 'react-router-dom'
const MainContainer = () => {
    return ( 
        <div id="mainContaner">
            <header>
             <div>
                 <h1>Get ready to wrap up </h1>
                 <h5>Decathlon.</h5>
                 <h5> Discover yourself</h5>
             <Link to="/discover"><img src={button}/></Link>
             </div>
            </header>
            <main>
                <div>
                    <img src={group} alt="" />
                </div>
            </main>
        </div>
     );
}
 
export default MainContainer;