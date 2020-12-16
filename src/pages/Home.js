import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadGames } from "../actions/gamesAction";
//components
import Game from "../components/Game";
// Styled and animations
import styled from "styled-components";
import { motion } from "framer-motion";

const Home = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadGames());
  }, [dispatch]);

  //get Data from the store
  const { popular, newGames, upComing } = useSelector((state) => state.games);

  return (
    <GameList>
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
    </GameList>
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
