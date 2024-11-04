import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Homepage from "./components/homepage";
// import Image from "./assets/images/reading"

function Header(props) {
    return (
        <div>
            <h1>Ini header {props.name}</h1>
        </div>
    );
}

function App() {
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

    function MyButton({ plus, minus, count, onReset }) {
        return (
            <>
                <div className="" style={{ display: "flex", gap: "10px" }}>
                    <button onClick={plus}>Plus {count}</button>
                    <button onClick={minus}>Minus {count}</button>
                    <button type="button" onClick={onReset}>
                        Reset
                    </button>
                </div>
            </>
        );
    }

    const [count, setCount] = useState(0);

    function plus1() {
        setCount(count + 1);
    }

    function minu1() {
        setCount(count - 1);
    }

    function reset() {
        setCount(0);
    }

    function Alert(){
        alert("Ini alert")
    }

    return (
        <>
            <h1>{user.name}</h1>
            <img
                src={user.imageUrl}
                alt={user.name}
                style={{ width: user.imageSize }}
            />

            <ul>
                {fruits.map((fruit) => (
                    <li key={fruit.id} style={{ color: fruit.color }}>{fruit.name}</li>
                ))}
            </ul>
            <button onClick={Alert}>Ini button alert</button>
            <Header name="Wayan" />
            <MyButton
                plus={plus1}
                minus={minu1}
                // count={count}
                onReset={reset}
            />
            <h1>{count}</h1>
        </>
    );
}

export default App;
