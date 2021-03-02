import loading_gif from "../img/loading_gif_png.gif";
import styled from "styled-components";
import { motion } from "framer-motion";

const Loading = () => {
  const style = {};
  return (
    <Imageloading>
      <img className="loading" src={loading_gif} alt="loading" style={style} />
    </Imageloading>
  );
};

const Imageloading = styled(motion.div)`
  min-height: 100vh;
  position: fixed;
  right: 0;
  left: 0;
`;

export default Loading;
