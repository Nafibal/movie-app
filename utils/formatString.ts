const formatString: (input: string) => string = (input: string) => {
  // Split the string by underscore and capitalize each word
  const words = input
    .split("_")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1));

  // Join the words with space
  const formattedString = words.join(" ");

  return formattedString;
};

export default formatString;
