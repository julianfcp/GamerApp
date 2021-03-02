// platform icons
import playstation from "./img/playstation.svg";
import gamepad from "./img/gamepad.svg";
import xbox from "./img/xbox.svg";
import steam from "./img/steam.svg";
import nintendo from "./img/nintendo.svg";
import apple from "./img/apple.svg";
// Stars
import StarEmpty from "./img/star-empty.png";
import StarFull from "./img/star-full.png";

export const smallImage = (imagePath, size) => {
  // this function replace the image url when the image
  // is an screeshot or the image ofthe game
  if (imagePath !== null) {
    const image = imagePath.match(/media\/screenshots/)
      ? imagePath.replace(
          "/media/screenshots",
          `/media/resize/${size}/-/screenshots`
        )
      : imagePath.replace("/media/games", `/media/resize/${size}/-/games/`);
    return image;
  } else {
    return imagePath;
  }
};

export const PlatformIcon = (platformName) => {
  switch (platformName) {
    case "PlayStation 4":
      return playstation;
    case "Xbox One":
      return xbox;
    case "PC":
      return steam;
    case "Nintendo Switch":
      return nintendo;
    case "IOS":
      return apple;
    default:
      return gamepad;
  }
};

export const getStars = (gameRating) => {
  const stars = [];
  const rating = Math.floor(gameRating);

  for (let i = 1; i <= 5; i++) {
    if (i <= rating) {
      stars.push(<img alt="star" key={i} src={StarFull}></img>);
    } else {
      stars.push(<img alt="star" key={i} src={StarEmpty}></img>);
    }
  }

  return stars;
};
