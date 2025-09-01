import { lazy, Suspense, useEffect, useState } from "react";
import "./App.css";
import { useDispatch } from "react-redux";
import { fetchMultiplePokemonById } from "./rtk/thunk";
import { Link, Route, Routes, useNavigate } from "react-router-dom";
import SplashScreen from "./pages/SplashScreen";
import { SearchIcon } from "lucide-react";
import NotFound from "./pages/NotFound";

const Main = lazy(() => import("./pages/Main"));
const Detail = lazy(() => import("./pages/Detail"));
const Search = lazy(() => import("./pages/Search"));
const Favorite = lazy(() => import("./pages/Favorite"));

function App() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [isSplash, setIsSplash] = useState(true);

  useEffect(() => {
    dispatch(fetchMultiplePokemonById(151));
    const timer = setTimeout(() => setIsSplash(false), 2000);
    return () => clearTimeout(timer);
  }, [dispatch]);

  if (isSplash) {
    return <SplashScreen />;
  }
  return (
    <>
      <header className="flex items-center justify-between pb-5">
        <h1 className="text-2xl">Pokédex</h1>
        <nav className="flex justify-center gap-4">
          <Link to={"/"}>메인</Link>
          <Link to={"/favorite"}>찜목록</Link>
          <div className="flex">
            <input
              onChange={(e) => navigate(`/search?pokemon=${e.target.value}`)}
              className="border-b border-neutral-600"
            />
            <SearchIcon className="size-5" />
          </div>
        </nav>
      </header>

      <main className="grid grid-cols-6 gap-5">
        <Suspense fallback={<div>로딩중...</div>}>
          <Routes>
            <Route path={"/"} element={<Main />} />
            <Route path={"/detail/:pokemonId"} element={<Detail />} />
            <Route path={"/search"} element={<Search />} />
            <Route path={"/favorite"} element={<Favorite />} />

            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </main>
    </>
  );
}
export default App;
