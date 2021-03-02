// Styled and animations
import styled from "styled-components";
import { motion } from "framer-motion";
// Components
//import Loading from "../components/Loading";
//Redux
import { useSelector } from "react-redux";
// Location History
import { useHistory } from "react-router-dom";
// Utils
import { smallImage, PlatformIcon, getStars } from "../Utils";

const GameDetail = ({ pathId }) => {
  const history = useHistory();
  // Exit Detail
  const exitHandler = (e) => {
    if (e.target.classList.contains("cardshadow")) {
      document.body.style.overflow = "auto"; // enables the scroll again
      history.push("/"); // redirects to home
    }
  };
  //Data
  const { game, screen, isLoading } = useSelector((state) => state.gameDetail);
  return (
    <>
      {!isLoading && (
        <CardShadow className="cardshadow" onClick={exitHandler}>
          <Detail layoutId={pathId}>
            <Stats>
              <div className="rating">
                <motion.h3 layoutId={`title ${pathId}`}>{game.name}</motion.h3>
                <p>Rating: {game.rating}</p>
                {getStars(game.rating)}
              </div>
              <Info>
                <h3>Platforms</h3>
                <Platforms>
                  {game.platforms.map((item) => (
                    <motion.img
                      animate={!isLoading ? "open" : "closed"}
                      variants={variants}
                      key={item.platform.id}
                      src={PlatformIcon(item.platform.name)}
                      alt={item.platform.name}
                    />
                  ))}
                </Platforms>
              </Info>
            </Stats>
            <Media>
              <motion.img
                layoutId={`image ${pathId}`}
                src={smallImage(game.background_image, 1280)}
                alt={game.background_image}
              />
            </Media>
            <Description>{game.description_raw}</Description>
            <Gallery>
              {screen.results.map((item) => (
                <img
                  key={item.id}
                  src={smallImage(item.image, 640)}
                  alt="game"
                />
              ))}
            </Gallery>
          </Detail>
        </CardShadow>
        // ) : (
        // <Loading />
      )}
    </>
  );
};

const CardShadow = styled(motion.div)`
  // shadow transparent background
  width: 100%;
  min-height: 100vh;
  overflow-y: scroll;
  background: rgba(0, 0, 0, 0.5);
  position: fixed;
  top: 0;
  left: 0;
  z-index: 10;
  &::-webkit-scrollbar {
    width: 0.5rem;
  }
  &::-webkit-scrollbar-thumb {
    background: #ff7676;
  }
  &::-webkit-scrollbar-track {
    background: white;
  }
`;

const variants = {
  open: {
    opacity: 1,
    scale: [1, 2, 2, 1, 1],
    rotate: [0, 0, 270, 270, 0],
    borderRadius: ["20%", "20%", "50%", "50%", "20%"],
  },
  closed: { opacity: 0 },
};

const Detail = styled(motion.div)`
  width: 80%;
  border-radius: 1rem;
  padding: 2rem 5rem;
  background: white;
  position: absolute;
  z-index: 10;
  left: 10%;
  color: black;
  img {
    width: 100%;
  }
`;

const Stats = styled(motion.div)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  img {
    width: 2rem;
    height: 2rem;
    display: inline;
  }
`;

const Info = styled(motion.div)`
  text-align: center;
`;

const Platforms = styled(motion.div)`
  display: flex;
  justify-content: space-evenly;
  img {
    margin-left: 3rem;
  }
`;

const Media = styled(motion.div)`
  margin-top: 5rem;
  img {
    width: 100%;
  }
`;

const Description = styled(motion.div)`
  margin: 5rem 0rem;
  text-align: justify;
`;

const Gallery = styled(motion.div)`
  margin: 2rem 0rem;
`;
export default GameDetail;
