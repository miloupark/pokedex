import { useSelector } from "react-redux";
import { selectorFavoritePokemons } from "../rtk/selector";
import { Card } from "../components/Card";

export default function Favorite() {
  const pokemon = useSelector(selectorFavoritePokemons);
  return (
    <>
      {pokemon.map((el) => (
        <Card key={el.id} pokemon={el} />
      ))}
    </>
  );
}
