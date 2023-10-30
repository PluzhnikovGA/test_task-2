export function createDate(date: string | undefined) {
  if (date === undefined) return date
  const newFormDate = new Date(date)

  const day = String(newFormDate.getDate());
  let mouth = String(newFormDate.getMonth() + 1);
  if (mouth.length === 1) {
    mouth = `0${mouth}`;
  }
  const year = String(newFormDate.getFullYear());

  return `${day}.${mouth}.${year}`;
}
