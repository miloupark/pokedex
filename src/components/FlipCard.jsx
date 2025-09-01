import { FlipHorizontal } from "lucide-react";
import { useState } from "react";
import styled from "styled-components";

export default function FlipCard({ front, back }) {
  const [flipped, setFlipped] = useState(false);

  return (
    <>
      <FlipImageContainer $flipped={flipped ? "flip" : ""}>
        <FrontImage src={front} />
        <BackImages src={back} />
      </FlipImageContainer>
      <button
        className="cursor-pointer"
        onClick={() => setFlipped((prev) => !prev)}
      >
        <FlipHorizontal className="size-5 text-neutral-400 stroke-neutral400 [&>path]:fill-transparent transition-all hover:text-green-300 hover:stroke-green-300" />
      </button>
    </>
  );
}

const FlipImageContainer = styled.div`
  position: relative;
  width: 180px;
  height: 180px;
  transform-style: preserve-3d;
  transition: 0.5s;
  transform: ${({ $flipped }) =>
    $flipped ? "rotateY(180deg)" : "rotateY(0deg)"};
`;

const FrontImage = styled.img`
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  position: absolute;
`;
const BackImages = styled.img`
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  transform: rotateY(180deg);
`;
