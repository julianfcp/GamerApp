// Styled and animations
import styled from "styled-components";
import { motion } from "framer-motion";
//Redux
import { useDispatch } from "react-redux";
import { loadDetail } from "../actions/detailAction";
// Router
import { Link } from "react-router-dom";

const Game = ({ gameId, gameName, released, image }) => {
  //load Details
  const dispatch = useDispatch();
  const handleGameDetail = () => {
    dispatch(loadDetail(gameId));
  };
  // Link to /game/gameId when click the game
  return (
    <StyledGame
      onClick={() => {
        handleGameDetail();
      }}
    >
      <Link to={`/game/${gameId}`}>
        <h3>{gameName}</h3>
        <p>{released}</p>
        <img src={image} alt={gameName} />
      </Link>
    </StyledGame>
  );
};

const StyledGame = styled(motion.div)`
  min-height: 30vh;
  box-shadow: 0px 5px 30px rgba(0, 0, 0, 0.2);
  text-align: center;
  border-radius: 1rem;
  cursor: pointer;
  img {
    width: 100%;
    min-height: 40vh;
    object-fit: cover;
  }
`;

export default Game;
