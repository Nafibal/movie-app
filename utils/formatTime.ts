const formatTime: (minutes: number) => string = (minutes: number) => {
  const hours = Math.floor(minutes / 60);
  const remainingMinutes = minutes % 60;

  const formattedTime = `${hours} hour${
    hours !== 1 ? "s" : ""
  } ${remainingMinutes} minute${remainingMinutes !== 1 ? "s" : ""}`;

  return formattedTime;
};

export default formatTime;
