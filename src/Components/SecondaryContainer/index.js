import './index.scss';
import {MdKeyboardArrowRight } from "react-icons/md";
import img from '../../Assets/images/dumbel.png'
import barbel from '../../Assets/images/barbel.jpg'
import { useState, useEffect } from 'react';
import Card from '../Card';
const SecondaryContainer = () => {

    const [changed, setChanded] = useState(false)
    const [items, setItems] = useState([
        {
            img: img,
            title: "Weight",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates, quaerat?"
        },

        {
            img: barbel,
            title: "Barbells",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates, quaerat?"
        },
        {
            img: img,
            title: "NEW",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates, quaerat?"
        },
        {
            img: barbel,
            title: "Barbells",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates, quaerat?"
        },
        {
            img: img,
            title: "Weight",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates, quaerat?"
        },
        {
            img: barbel,
            title: "Barbells",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates, quaerat?"
        },
        {
            img: img,
            title: "Weight",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates, quaerat?"
        },
    ])
    const moveRight = () => {
        let arr = items;
        let el = arr.shift();
        arr.push(el)

        setItems(arr);
        setChanded(!changed)
    }
    const moveLeft = () => {
        let arr = items;
        let el = arr.pop();
        arr.unshift(el)

        setItems(arr);
        setChanded(!changed)
    }
    useEffect(() => {

    }, [changed])

    return (
        <div id="secondaryContaner">
            <h1>Most Searched Products</h1>

            <div>
                <div>
                    { items.map(x =><Card x={x}/>) }
                </div>
            </div>
        </div>
    );
}

export default SecondaryContainer;