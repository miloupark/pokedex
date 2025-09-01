import { useEffect, useState } from "react";
import DecryptedText from "../components/DecryptedText";
import Professor from "../images/professor.png";

export default function SplashScreen({
  onFinish,
  showMs = 1800,
  fadeMs = 500,
  freeze = false,
}) {
  const [hiding, setHiding] = useState(false);

  useEffect(() => {
    if (freeze) return;
    const id = setTimeout(() => setHiding(true), showMs);
    return () => clearTimeout(id);
  }, [showMs]);

  function handleTransitionEnd() {
    if (hiding) onFinish?.();
  }

  return (
    <div
      className={`grid h-full justify-items-center content-center gap-24  transition-opacity duration-[${fadeMs}ms]`}
      onTransitionEnd={handleTransitionEnd}
      role="status"
      aria-live="polite"
      aria-busy="true"
    >
      <h1 className="text-4xl">Pokédex</h1>
      <img src={Professor} alt="오박사님" className="w-[240px] h-[240px]" />
      <div className="grid justify-items-center gap-4">
        <DecryptedText
          text="안녕! 나는 오박사다."
          animateOn="view"
          sequential
          speed={40}
          revealDirection="start"
          className="text-xl font-bold"
        />
        <DecryptedText
          text="포켓몬의 세계에 온 걸 환영한다!"
          animateOn="view"
          sequential
          speed={40}
          revealDirection="start"
          className="text-xl font-bold"
        />
        <DecryptedText
          text="이곳에서 다양한 포켓몬들을 만나보렴."
          animateOn="view"
          sequential
          speed={40}
          revealDirection="start"
          className="text-xl font-bold "
        />
      </div>
    </div>
  );
}
