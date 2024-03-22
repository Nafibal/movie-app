const shortenText = (text: string, maxWords: number) => {
  const words = text.split(" ");
  if (words.length <= maxWords) {
    return text;
  }

  const shortenedText = words.slice(0, maxWords).join(" ") + "...";
  return shortenedText;
};

export default shortenText;
