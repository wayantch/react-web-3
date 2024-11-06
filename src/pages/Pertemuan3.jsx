import { useState, useEffect } from "react";
import ReactDOM from "react-dom/client";
import Navbar from "../components/Navbar";
const Pertemuan3 = () => {
  function Timer() {
    const [count, setCount] = useState(0);

    useEffect(() => {
      setTimeout(() => {
        setCount((count) => count + 1);
      }, 1000);
    });

    return <h1>I've rendered {count} times!</h1>;
  }
  const root = ReactDOM.createRoot(document.getElementById("root"));
  root.render(<Timer />);

  return (
    <>
      <h1>Ini Timere {count}</h1>
    </>
  );
};

export default Pertemuan3;
