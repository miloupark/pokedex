import { useNavigate } from "react-router-dom";
import FavoriteButton from "./FavoriteButton";

export default function Card({ pokemon }) {
  const navigate = useNavigate();

  return (
    <section
      className="w-[120px] border-1"
      onClick={() => navigate(`/detail/${pokemon.id}`)}
    >
      <div>
        {pokemon.name} <FavoriteButton pokemonId={pokemon.id} />
      </div>
      <img src={pokemon.front} alt="포켓몬" />
    </section>
  );
}
