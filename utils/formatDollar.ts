const formatDollar: (num: number) => string = (num: number) => {
  // Convert the number to a string and add commas for thousands separator
  const formattedNumber = num.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, "$&,");
  // Add a dollar sign in front of the number
  return `$${formattedNumber}`;
};

export default formatDollar;
