const imageSource: (size: "original" | "w500", path: string) => string = (
  size,
  path
) => {
  return `https://image.tmdb.org/t/p/${size}${path}`;
};

export default imageSource;
