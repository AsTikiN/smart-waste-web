export const differenceInDays = (date1: Date, date2: Date): number => {
  const oneDay = 24 * 60 * 60 * 1000;

  const timeDifference = Math.abs(date2.getTime() - date1.getTime());
  const daysDifference = Math.floor(timeDifference / oneDay);

  return daysDifference;
};
