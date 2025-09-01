import { useNavigate } from "react-router-dom";
import FavoriteButton from "./FavoriteButton";
import { memo, useState } from "react";

export const Card = memo(({ pokemon }) => {
  console.log("card", pokemon.id);
  const [isImageLoading, setIsImageLoading] = useState(true);
  const navigate = useNavigate();

  return (
    <div
      className="grid place-items-center min-w-[180px] min-h-[180px] border p-5 rounded-md
"
      onClick={() => navigate(`/detail/${pokemon.id}`)}
    >
      <div className="w-full flex justify-between items-center">
        <p className="w-full pl-5 text-xl text-center">{pokemon.name}</p>
        <FavoriteButton pokemonId={pokemon.id} />
      </div>
      {isImageLoading ? (
        <div className="w-[120px] h-[120px] leading-[120px] text-center">
          로딩중...
        </div>
      ) : null}
      <img
        className="max-h-full max-w-full object-contain"
        onLoad={() => {
          setIsImageLoading(false);
        }}
        src={pokemon.front}
        style={{ display: isImageLoading ? "none" : "block" }}
        alt="포켓몬"
      />
    </div>
  );
});
