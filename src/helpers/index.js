import { months } from "../constants";

export const addCommaInNumbers = (number) => {
  let numberInStringArray = String(number).split("");

  if (numberInStringArray[0] === "-") {
    numberInStringArray.splice(0, 1);
  }

  switch (numberInStringArray.length) {
    case 4:
      const slicedArray = numberInStringArray.splice(0, 1);
      const numberWithComma = [
        ...slicedArray,
        ",",
        ...numberInStringArray,
      ].join("");
      return numberWithComma;
    case 5:
      const slicedArrayWithTwoDigit = numberInStringArray.splice(0, 2);
      const numberWithComma1 = [
        ...slicedArrayWithTwoDigit,
        ",",
        ...numberInStringArray,
      ].join("");
      // console.log(slicedArrayWithTwoDigit, numberInStringArray);
      return numberWithComma1;

    default:
      return number;
  }
};

export const formatDate = (date) => {
  return `${date.getDate()} ${months[date.getMonth()]} 2022`;
};
