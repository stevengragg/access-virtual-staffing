import {
  BiBell,
  BiCalendar,
  BiInfoCircle,
  BiCheckCircle,
} from "react-icons/bi";
export function getNotificationIcon(type: string) {
  switch (type) {
    case "jobs":
      return (
        <BiBell size={30} className="bg-deepBlue text-white p-1 rounded-full" />
      );
    case "job_submissions":
      return (
        <BiCalendar
          size={30}
          className="bg-deepBlue text-white p-1 rounded-full"
        />
      );
    case "info":
      return (
        <BiInfoCircle
          size={30}
          className="bg-oceanBlue text-white p-1 rounded-full"
        />
      );
    case "update":
      return (
        <BiCheckCircle
          size={30}
          className="bg-deepZinc text-white p-1 rounded-full"
        />
      );
    default:
      return (
        <BiBell size={30} className="bg-deepBlue text-white p-1 rounded-full" />
      );
  }
}
