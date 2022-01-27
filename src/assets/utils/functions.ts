type TDateType = string | number | Date

export const formatDate = (date: TDateType): TDateType => {
  const returnDate = new Date(date).toLocaleDateString('nb-NO', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })
  if (returnDate === 'Invalid Date') {
    return date
  }
  if (returnDate === '1. januar 1970') {
    return 'Søknadsfrist er ikke registrert'
  }
  return returnDate
}

export const truncateTextLength = (inputString: string, maxLength: number, suffix: string): string =>
  inputString.length < maxLength
    ? inputString
    : `${inputString.substr(0, inputString.substr(0, maxLength - suffix.length).lastIndexOf(' '))}${suffix}`
