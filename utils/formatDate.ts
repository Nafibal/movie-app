const formatDate = (inputDate: string, returnedDate: string = "full") => {
  // Parse the input date string
  const dateParts = inputDate.split("-");
  const year = parseInt(dateParts[0]);
  const month = parseInt(dateParts[1]) - 1; // Months are zero-based
  const day = parseInt(dateParts[2]);

  // Create a Date object with the parsed values
  const date = new Date(year, month, day);

  // Array of month names
  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  if (returnedDate == "day") {
    return date.getDate();
  }
  if (returnedDate == "month") {
    return date.getMonth();
  }
  if (returnedDate == "year") {
    return date.getFullYear();
  }
  if (returnedDate == "full") {
    // Format the date as desired (e.g., "dd MonthName yyyy")
    const formattedDate = `${date.getDate()} ${
      monthNames[date.getMonth()]
    } ${date.getFullYear()}`;

    return formattedDate;
  }
};

export default formatDate;
