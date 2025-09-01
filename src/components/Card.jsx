import { useNavigate } from "react-router-dom";
import FavoriteButton from "./FavoriteButton";
import { memo, useState } from "react";

export const Card = memo(({ pokemon }) => {
  console.log("card", pokemon.id);
  const [isImageLoading, setIsImageLoading] = useState(true);
  const navigate = useNavigate();

  return (
    <section
      className="w-[120px] border-1"
      onClick={() => navigate(`/detail/${pokemon.id}`)}
    >
      <div>
        {pokemon.name} <FavoriteButton pokemonId={pokemon.id} />
      </div>
      {isImageLoading ? (
        <div className="w-[120px] h-[120px] leading-[120px] text-center">
          로딩중...
        </div>
      ) : null}
      <img
        onLoad={() => {
          setIsImageLoading(false);
        }}
        src={pokemon.front}
        style={{ display: isImageLoading ? "none" : "block" }}
        alt="포켓몬"
      />
    </section>
  );
});
