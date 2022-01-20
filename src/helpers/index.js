import { months } from "../constants";

export const addCommaInNumbers = (number) => {
  let numberInStringArray = String(number).split("");
  let minusSign = [];

  if (numberInStringArray[0] === "-") {
    minusSign = numberInStringArray.splice(0, 1);
  }

  switch (numberInStringArray.length) {
    case 4:
      const slicedArray = minusSign.length
        ? [minusSign[0], ...numberInStringArray.splice(0, 1)]
        : numberInStringArray.splice(0, 1);
      const numberWithComma = [
        ...slicedArray,
        ",",
        ...numberInStringArray,
      ].join("");
      return numberWithComma;
    case 5:
      const slicedArrayWithTwoDigit = minusSign.length
        ? [minusSign[0], ...numberInStringArray.splice(0, 2)]
        : numberInStringArray.splice(0, 2);
      const numberWithComma1 = [
        ...slicedArrayWithTwoDigit,
        ",",
        ...numberInStringArray,
      ].join("");
      return numberWithComma1;

    default:
      return number;
  }
};

export const formatDate = (date) => {
  return `${date.getDate()} ${months[date.getMonth()]} 2022`;
};

export const currentUserId = () => localStorage.getItem("id");
