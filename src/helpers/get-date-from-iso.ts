export default function getDateFromIso(date: string) {
  return date.split("T")[0];
}
