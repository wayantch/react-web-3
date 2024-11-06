import React, { useState } from 'react';
import Navbar from '../components/Navbar';

const Header = (props) => {
    return (
        <div>
            <h1>Ini header {props.name}</h1>
        </div>
    );
};

const MyButton = ({ plus, minus, count, onReset }) => {
    return (
        <div style={{ display: "flex", gap: "10px" }}>
            <button onClick={plus}>Plus</button>
            <button onClick={minus}>Minus</button>
            <button type="button" onClick={onReset}>Reset</button>
        </div>
    );
};

const Pertemuan2 = () => {
    const user = {
        name: "Wayan",
        imageUrl: "https://i.imgur.com/yXOvdOSs.jpg",
        imageSize: 90,
    };

    const fruits = [
        { id: 1, name: "Apple", color: "red" },
        { id: 2, name: "Orange", color: "green" },
        { id: 3, name: "Melon", color: "yellow" },
    ];

    const [count, setCount] = useState(0);

    const plus1 = () => {
        setCount(count + 1);
    };

    const minus1 = () => {
        setCount(count - 1);
    };

    const reset = () => {
        setCount(0);
    };

    const Alert = () => {
        alert("Ini alert");
    };

    return (
        <div>
            <h1>{user.name}</h1>
            <img
                src={user.imageUrl}
                alt={user.name}
                style={{ width: user.imageSize }}
            />

            <ul>
                {fruits.map((fruit) => (
                    <li key={fruit.id} style={{ color: fruit.color }}>
                        {fruit.name}
                    </li>
                ))}
            </ul>

            <button onClick={Alert}>Ini button alert</button>
            <Header name="Wayan" />
            <MyButton
                plus={plus1}
                minus={minus1}
                count={count}
                onReset={reset}
            />
            <h1>{count}</h1>
        </div>
    );
};

export default Pertemuan2;
