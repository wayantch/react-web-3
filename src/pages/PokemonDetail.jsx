import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Gif from "../assets/images/animate.gif";

export default function PokemonDetail() {
  const { name } = useParams();
  const [pokemon, setPokemon] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPokemon = async () => {
      try {
        const response = await fetch(
          `https://pokeapi.co/api/v2/pokemon/${name}`
        );
        const data = await response.json();
        setPokemon(data);
        setLoading(false);
      } catch (error) {
        setError(error);
      }
    };

    fetchPokemon();
  }, [name]);

  if (loading) return <div className="flex justify-center items-center h-screen"><img src={Gif} alt="" /></div>;
  if (error)
    return (
      <div className="text-red-500 text-center text-xl">
        Error: {error.message}
      </div>
    );

  return (
    <div className="container mx-auto p-4 h-screen flex items-center justify-center flex-col">
      <div class="w-96 h-auto duration-500 group overflow-hidden relative rounded-xl bg-neutral-800 text-neutral-50 p-4 flex flex-col justify-evenly">
        <div class="absolute blur duration-500 group-hover:blur-none w-72 h-72 rounded-full group-hover:translate-x-12 group-hover:translate-y-12 bg-sky-900 right-1 -bottom-24"></div>
        <div class="absolute blur duration-500 group-hover:blur-none w-12 h-12 rounded-full group-hover:translate-x-12 group-hover:translate-y-2 bg-indigo-700 right-12 bottom-12"></div>
        <div class="absolute blur duration-500 group-hover:blur-none w-36 h-36 rounded-full group-hover:translate-x-12 group-hover:-translate-y-12 bg-indigo-800 right-1 -top-12"></div>
        <div class="absolute blur duration-500 group-hover:blur-none w-24 h-24 bg-sky-700 rounded-full group-hover:-translate-x-12"></div>
        <div class="z-10 flex flex-col justify-evenly w-full h-full">
          <span class="text-2xl font-bold capitalize text-center">
            {pokemon?.name}
          </span>
          <img
            src={pokemon.sprites.front_default}
            alt={pokemon.name}
            className="mx-auto"
            width={140}
          />
          <p className="text-lg mt-4">
            Type: {pokemon.types.map((type) => type.type.name).join(", ")}
          </p>
          <p className="text-lg mt-2">Height: {pokemon.height}</p>
          <p className="text-lg mt-2">Weight: {pokemon.weight}</p>
        </div>
      </div>

      <Link to="/pokemon">
        {" "}
        <div className="mt-5 bg-gray-200 px-10 py-2 rounded text-indigo-700 font-semibold text-xl">Back</div>
      </Link>
    </div>
  );
}
