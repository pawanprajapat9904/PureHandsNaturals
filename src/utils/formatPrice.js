import { CURRENCY_SYMBOL } from "./constants";

export default function formatPrice(amount) {
  if (typeof amount !== "number") return "";
  return `${CURRENCY_SYMBOL}${amount.toLocaleString("en-IN")}`;
}
