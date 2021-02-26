export const smallImage = (imagePath, size) => {
  // this function replace the image url when the image
  // is an screeshot or the image ofthe game
  const image = imagePath.match(/media\/screenshots/)
    ? imagePath.replace(
        "/media/screenshots",
        `/media/resize/${size}/-/screenshots`
      )
    : imagePath.replace("/media/games", `/media/resize/${size}/-/games/`);
  return image;
};
