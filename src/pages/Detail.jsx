import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { selectPokemonById } from "../rtk/selector";
import FavoriteButton from "../components/FavoriteButton";
import FlipCard from "../components/FlipCard";

export default function Detail() {
  const { pokemonId } = useParams();
  const pokemon = useSelector(selectPokemonById(Number(pokemonId)));
  return (
    <div>
      <p>
        {pokemon.name}
        <FavoriteButton pokemonId={Number(pokemonId)} />
      </p>
      <p className="whitespace-pre-wrap">{pokemon.description}</p>
      <FlipCard front={pokemon.front} back={pokemon.back} />
    </div>
  );
}
