import { useDispatch, useSelector } from "react-redux";
import { favoriteSlice } from "../rtk/slice";
import { Heart } from "lucide-react";

export default function FavoriteButton({ pokemonId }) {
  const isFavorite = useSelector((state) =>
    state.favorite.some((item) => item === pokemonId)
  );
  const dispatch = useDispatch();

  return (
    <button
      onClick={(e) => {
        e.stopPropagation();
        dispatch(
          isFavorite
            ? favoriteSlice.actions.removeFromFavorite({ pokemonId })
            : favoriteSlice.actions.addToFavorite({ pokemonId })
        );
      }}
      className={`cursor-pointer isFavorite ? "text-red-500" : ""`}
    >
      {isFavorite ? (
        <Heart className="size-5 text-red-500 stroke-red-500 [&>path]:fill-red-500 transition-all " />
      ) : (
        <Heart className="size-5 text-neutral-500 stroke-neutral-500 [&>path]:fill-transparent transition-all hover:text-red-500 hover:stroke-red-500" />
      )}
    </button>
  );
}
