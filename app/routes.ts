import { type RouteConfig, route } from "@react-router/dev/routes";

export default [
  route("/", "routes/index-redirect.tsx"),
  route("home", "routes/home.tsx"),
  route("aboutus", "routes/aboutus-redirect.tsx"),
  route("aboutus/what-we-do", "routes/about.what-we-do.tsx"),
  route("aboutus/meet-the-team", "routes/about.meet-the-team.tsx"),
  route("contact", "routes/contact.tsx"),
  route("*", "routes/404.tsx"),
] satisfies RouteConfig;
