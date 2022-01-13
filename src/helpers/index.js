export const addCommaInNumbers = (number) => {
  console.log(number, typeof number);
  let numberInStringArray = String(number).split("");

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
      return numberWithComma1;

    default:
      return number;
  }
};
