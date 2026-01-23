import { WHATSAPP_NUMBER, CURRENCY_SYMBOL } from "./constants";

export function generateWhatsAppMessage(cartItems, address, totalAmount) {
  let message = `Hello, I want to place an order.\n\n`;

  message += `🛒 Order Details:\n`;

  cartItems.forEach((item, index) => {
    message += `${index + 1}. ${item.name}\n`;
    message += `   Quantity: ${item.quantity}\n`;
    message += `   Price: ${CURRENCY_SYMBOL}${item.price}\n\n`;
  });

  message += `-----------------------\n`;
  message += `Total Amount: ${CURRENCY_SYMBOL}${totalAmount}\n\n`;

  message += `📍 Delivery Address:\n`;
  message += `Name: ${address.name}\n`;
  message += `Phone: ${address.phone}\n`;
  message += `House: ${address.house}\n`;
  message += `Area: ${address.area}\n`;
  message += `City: ${address.city}\n`;
  message += `State: ${address.state}\n`;
  message += `Pincode: ${address.pincode}\n`;

  return encodeURIComponent(message);
}

export function openWhatsApp(cartItems, address, totalAmount) {
  const text = generateWhatsAppMessage(cartItems, address, totalAmount);
  const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${text}`;
  window.open(url, "_blank");
}
