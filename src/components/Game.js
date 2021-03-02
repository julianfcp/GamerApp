// Styled and animations
import styled from "styled-components";
import { motion } from "framer-motion";
//Redux
import { useDispatch } from "react-redux";
import { loadDetail } from "../actions/detailAction";
// Router
import { Link } from "react-router-dom";
// Utils
import { smallImage } from "../Utils";
// Animations
import { popUp } from "../animations";

const Game = ({ gameId, gameName, released, image }) => {
  const stringGameId = gameId.toString();

  //load Details
  const dispatch = useDispatch();
  const handleGameDetail = () => {
    document.body.style.overflow = "hidden";
    dispatch(loadDetail(gameId));
  };
  // Link to /game/gameId when click the game
  return (
    <StyledGame
      onClick={() => {
        handleGameDetail();
      }}
      layoutId={stringGameId}
      variants={popUp}
      initial="hidden"
      animate="show"
    >
      <Link to={`/game/${gameId}`}>
        <motion.h3 layoutId={`title ${stringGameId}`}>{gameName}</motion.h3>
        <p>{released}</p>
        <motion.img
          layout={`image ${stringGameId}`}
          src={smallImage(image, 640)}
          alt={gameName}
        />
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
  overflow-y: hidden; // shows rounded edge at the bottom of images
  img {
    width: 100%;
    min-height: 40vh;
    object-fit: cover;
  }
`;

export default Game;
