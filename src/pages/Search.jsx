import { getRegExp } from "korean-regexp";
import { useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";
import { selectPokemonByRegExp } from "../rtk/selector";
import { Card } from "../components/Card";

export default function Search() {
  const [searchParams] = useSearchParams();
  const param = searchParams.get("pokemon");
  const reg = getRegExp(param);
  const pokemon = useSelector(selectPokemonByRegExp(reg));

  if (pokemon.length === 0) {
    return (
      <div className="col-span-full text-center py-16 text-gray-600">
        🗺️ 그 포켓몬은 잠시 여행을 떠났어요! 다른 포켓몬 친구들을 찾아보세요!
      </div>
    );
  }

  return (
    <>
      {pokemon.map((el) => (
        <Card key={el.id} pokemon={el} />
      ))}
    </>
  );
}
