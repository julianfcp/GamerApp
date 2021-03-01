import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadGames } from "../actions/gamesAction";
//components
import Game from "../components/Game";
import GameDetail from "../components/GameDetail";
import Loading from "../components/Loading";
// Styled and animations
import styled from "styled-components";
import { motion, AnimatePresence, AnimateSharedLayout } from "framer-motion";
// location
import { useLocation } from "react-router-dom";

const Home = () => {
  const location = useLocation();
  const pathId = location.pathname.split("/")[2]; // Get the id from the path
  const dispatch = useDispatch();

  useEffect(() => {
    // Fetch the data when the app is mounted
    dispatch(loadGames());
  }, [dispatch]); // we add the dependency

  //get Data from the store
  // games is the name of the reducer when we use combineReducers
  const { popular, newGames, upComing, isLoading } = useSelector(
    (state) => state.games
  );

  return (
    <>
      {!isLoading ? (
        <GameList>
          <AnimateSharedLayout type="crossfade">
            <AnimatePresence>
              {pathId && <GameDetail pathId={pathId} />}
            </AnimatePresence>
            <h2> Upcoming Games</h2>
            <Games>
              {upComing.map((game) => (
                <Game
                  key={game.id}
                  gameName={game.name}
                  released={game.released}
                  gameId={game.id}
                  image={game.background_image}
                />
              ))}
            </Games>
            <h2> Popular Games</h2>
            <Games>
              {popular.map((game) => (
                <Game
                  key={game.id}
                  gameName={game.name}
                  released={game.released}
                  gameId={game.id}
                  image={game.background_image}
                />
              ))}
            </Games>
            <h2> New Games</h2>
            <Games>
              {newGames.map((game) => (
                <Game
                  key={game.id}
                  gameName={game.name}
                  released={game.released}
                  gameId={game.id}
                  image={game.background_image}
                />
              ))}
            </Games>
          </AnimateSharedLayout>
        </GameList>
      ) : (
        <Loading />
      )}
    </>
  );
};

const GameList = styled(motion.div)`
  padding: 0rem 5rem;
  h2 {
    padding: 5rem 0rem;
  }
`;
const Games = styled(motion.div)`
  min-height: 80vh;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(500px, 1fr));
  grid-column-gap: 3rem;
  grid-row-gap: 5rem;
`;

export default Home;
