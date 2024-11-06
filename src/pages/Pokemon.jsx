import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Image from '../assets/images/pokemon.png';
import Gif from "../assets/images/animate.gif";


export default function Pokemon() {
  const [pokemon, setPokemon] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://pokeapi.co/api/v2/pokemon?limit=100"
        );
        const data = await response.json();

        const pokemonDatas = await Promise.all(
          data.results.map(async (poke) => {
            const pokeResponse = await fetch(poke.url);
            return pokeResponse.json();
          })
        );

        setPokemon(pokemonDatas);
        setLoading(false);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <div className="flex justify-center items-center h-screen"><img src={Gif} alt="" /></div>;
  }
  if (error) {
    return (
      <div className="text-red-500 text-center text-xl">
        Error: {error.message}
      </div>
    );
  }

  return (
    <div className="container mx-auto p-4">
      <div className="flex justify-center mb-6">
        <img src={Image} alt="Pokémon Logo" className="w-64" />
      </div>
      
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {pokemon.map((poke) => (
          <div key={poke.name} className="bg-gradient-to-br from-indigo-500 to-purple-500 rounded-xl shadow-lg  relative transform transition duration-500 hover:scale-105">
            {/* Header Kartu */}
            <div className="w-full h-20 bg-indigo-800 rounded-t-xl relative">
              <img
                src={poke.sprites.front_default}
                alt={poke.name}
                className="w-32 h-32 absolute  left-1/2 transform -translate-x-1/2"
              />
            </div>

            {/* Informasi Pokémon */}
            <div className="p-6 text-white">
              <h1 className="text-2xl font-bold mb-2">
                {poke.name.charAt(0).toUpperCase() + poke.name.slice(1)}
              </h1>
              <p className="text-lg">Type: {poke.types[0].type.name}</p>
              <p className="text-sm text-gray-200 mt-2">
                Pokémon bertipe {poke.types[0].type.name}.
              </p>
              <Link
                to={`/pokemon_detail/${poke.name}`}
                className="mt-4 inline-block px-4 py-2 bg-yellow-400 text-gray-800 font-semibold rounded-lg shadow-md hover:bg-yellow-500 transition duration-300"
              >
                View Details
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
