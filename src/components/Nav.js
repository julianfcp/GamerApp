// react
import { useState } from "react";
//Redux
import { useDispatch } from "react-redux";
import { searchGames, clearSearchGames } from "../actions/gamesAction";
// Styled and animations
import styled from "styled-components";
import { motion } from "framer-motion";
// Logo
import logo from "../img/GamerLogo.png";

const Nav = () => {
  const [inputSearch, setInputSearch] = useState();
  const dispatch = useDispatch();
  const handleSearch = () => {
    setInputSearch("");
    dispatch(searchGames(inputSearch));
  };
  const handleHomePage = () => {
    dispatch(clearSearchGames());
  };
  return (
    <StyledNav>
      <Logo onClick={handleHomePage}>
        <h2>GamerApp</h2>
        <img alt="logo" src={logo}></img>
      </Logo>
      <div className="search">
        <input
          type="text"
          value={inputSearch}
          onChange={(e) => setInputSearch(e.target.value)}
        ></input>
        <button onClick={handleSearch}>Search</button>
      </div>
    </StyledNav>
  );
};

const StyledNav = styled(motion.nav)`
  padding: 2rem 5rem;
  text-align: center;
  input {
    width: 30%;
    font-size: 1.5rem;
    border: none;
    margin-top: 1rem;
    padding: 0.5rem;
    box-shadow: 0px 0px 30px rgba(0, 0, 0, 0.3);
    outline-color: #ff7676;
    border-radius: 15px 0px 0px 15px;
  }
  button {
    font-size: 1.5rem;
    border: none;
    padding: 0.5rem 0.2rem;
    cursor: pointer;
    background-color: #ff7676;
    color: white;
    box-shadow: 5px 0px 20px 0px rgb(0 0 0 / 30%);
    outline-color: #ff7676;
    border-radius: 0px 15px 15px 0px;
  }
`;

const Logo = styled(motion.div)`
  img {
    width: 5rem;
  }
  justify-content: center;
  display: flex;
  padding: 1rem;
  cursor: pointer;
`;

export default Nav;
