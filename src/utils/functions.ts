/* Typescript typings */
type dateType = string | number | Date;

export const formatDate = (date: dateType):string => new Date(date).toLocaleDateString('nb-NO', {
  year: 'numeric',
  month: 'long',
  day: 'numeric',
});

export default formatDate;
