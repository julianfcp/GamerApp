// Styled and animations
import styled from "styled-components";
import { motion } from "framer-motion";

const Game = ({ gameName, released, image }) => {
  return (
    <StyledGame>
      <h3>{gameName}</h3>
      <p>{released}</p>
      <img src={image} alt={gameName} />
    </StyledGame>
  );
};

const StyledGame = styled(motion.div)`
  min-height: 30vh;
  box-shadow: 0px 5px 30px rgba(0, 0, 0, 0.2);
  text-align: center;
  border-radius: 1rem;
  img {
    width: 100%;
    min-height: 40vh;
    object-fit: cover;
  }
`;

export default Game;
