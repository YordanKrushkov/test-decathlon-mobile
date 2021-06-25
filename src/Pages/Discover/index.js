import {useState} from 'react';
import Card from '../../Components/Card'
import shirt from '../../Assets/images/shirt.png'
import waterproofs from '../../Assets/images/waterproof.png'
import scooter from '../../Assets/images/scooter.png'
import flee from '../../Assets/images/flee.png'
import snoo from '../../Assets/images/snoo.png'
import home from '../../Assets/images/home.png'
const Discover = () => {
    const [items, setItems]=useState([
        {title:'Base layers',
        img:shirt,
        description:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit, dolorum.'
    },
        {title:'Waterproofs',
        img:waterproofs,
        description:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit, dolorum.'
    },
        {title:'Scooter',
        img:scooter,
        description:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit, dolorum.'
    },
        {title:'Fleeces',
        img:flee,
        description:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit, dolorum.'
    },
        {title:'Snoods',
        img:snoo,
        description:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit, dolorum.'
    },
        {title:'Home Workout',
        img:home,
        description:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit, dolorum.'
    },
    ])
    return ( 
        <div>
        {items.map(x=><Card x={x}/>)}
        </div>
     );
}
 
export default Discover;