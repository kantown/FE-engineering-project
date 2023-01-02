export default function getDateFromIso(date: string) {
  console.log(date);
  console.log(date.split("T"));
  return date.split("T")[0];
}
