import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const formatMessageTime=(data:string)=>{

  const date = new Date(data);
  const now = new Date();

  // Check if the message is from today
  const isToday =
    date.getDate() === now.getDate() &&
    date.getMonth() === now.getMonth() &&
    date.getFullYear() === now.getFullYear();

  let formattedTime = "";

  if (isToday) {
    // Format as HH:MM AM/PM
    let hours = date.getHours();
    const minutes = date.getMinutes();
    const ampm = hours >= 12 ? "PM" : "AM";
    hours = hours % 12;
    hours = hours ? hours : 12; // the hour '0' should be '12'
    const minutesStr = minutes < 10 ? "0" + minutes : minutes;
    formattedTime = `${hours}:${minutesStr} ${ampm}`;
  } else {
    // Format as DD/MM/YYYY
    const day = date.getDate().toString().padStart(2, "0");
    const month = (date.getMonth() + 1).toString().padStart(2, "0");
    const year = date.getFullYear();
    formattedTime = `${day}/${month}/${year}`;
  }
  return formattedTime;
}
