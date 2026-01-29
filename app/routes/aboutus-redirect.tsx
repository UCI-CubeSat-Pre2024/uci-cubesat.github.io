import { redirect } from "react-router";

export function clientLoader() {
  return redirect("/aboutus/what-we-do");
}

export default function AboutUsRedirect() {
  return null;
}
