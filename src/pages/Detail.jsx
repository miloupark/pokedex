import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { selectPokemonById } from "../rtk/selector";
import FavoriteButton from "../components/FavoriteButton";
import FlipCard from "../components/FlipCard";
import Background from "../images/background.svg";

export default function Detail() {
  const { pokemonId } = useParams();
  const pokemon = useSelector(selectPokemonById(Number(pokemonId)));
  return (
    <div className="col-span-full h-screen flex flex-col">
      <div
        className="relative w-full h-full flex justify-center bg-no-repeat bg-contain bg-center"
        style={{
          backgroundImage: `url(${Background}) `,
          backgroundSize: "600px",
          backgroundPosition: "center 8%",
        }}
      >
        <div className="absolute min-w-[24%] left-1/2 -translate-x-1/2  top-[14%] grid h-0 place-items-center text-center ">
          <p className="flex w-full justify-between pt-3 pb-3">
            {pokemon.name}
            <FavoriteButton pokemonId={Number(pokemonId)} />
          </p>
          <p className="whitespace-pre-wrap text-xs">{pokemon.description}</p>
          <FlipCard front={pokemon.front} back={pokemon.back} />
        </div>
      </div>
    </div>
  );
}
