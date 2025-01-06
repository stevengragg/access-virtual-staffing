import { redirect } from "next/navigation";

export default function App() {
  redirect("/app/overview");
  return null;
}
