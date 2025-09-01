import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

export default function NotFound() {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/");
    }, 3000);
    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="col-span-full text-center py-20">
      <h2 className="text-4xl font-bold pb-10">이 길에는 포켓몬이 없어요!</h2>
      <p className="text-2xl text-gray-600">다른 포켓몬을 만나러 가요!</p>
    </div>
  );
}
