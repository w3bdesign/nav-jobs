/* Typescript typings */
type TDateType = string | number | Date;

export const formatDate = (date: TDateType): TDateType => {
  const returnDate = new Date(date).toLocaleDateString('nb-NO', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
  if (returnDate === 'Invalid Date') { return date; }
  if (returnDate === '1. januar 1970') { return 'Søknadsfrist er ikke registrert'; }
  return returnDate;
};

export default formatDate;
