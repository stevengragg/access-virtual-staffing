import { BiBell, BiCalendar, BiInfoCircle, BiCheckCircle } from "react-icons/bi";
export function getNotificationIcon(type: string) {
  switch (type) {
    case "recommendation":
      return <BiBell size={30} className="bg-deepBlue text-white p-1 rounded-full" />;
    case "reminder":
      return <BiCalendar size={30} className="bg-yellow-500 text-white p-1 rounded-full" />;
    case "info":
      return <BiInfoCircle size={30} className="bg-blue-500 text-white p-1 rounded-full" />;
    case "update":
      return <BiCheckCircle size={30} className="bg-green-500 text-white p-1 rounded-full" />;
    default:
      return <BiBell size={30} className="bg-deepBlue text-white p-1 rounded-full" />;
  }
}
