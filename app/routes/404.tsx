import { Link } from "react-router";
import type { MetaFunction } from "react-router";

export const meta: MetaFunction = () => [
  { title: "Page Not Found | UCI CubeSat" },
  {
    name: "description",
    content: "The page you're looking for doesn't exist.",
  },
];

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] px-6 text-center">
      <h1 className="font-bold text-[72px] text-primary mb-4 max-sm:text-[48px]">
        404
      </h1>
      <p className="text-lg text-muted mb-8">Page Not Found</p>
      <Link
        to="/home"
        className="text-sm font-medium text-earth transition-colors hover:text-atmosphere"
      >
        Back to Home →
      </Link>
    </div>
  );
}
