import { Helmet } from "react-helmet-async";
import { Link, useNavigate } from "react-router-dom";
import { useTheme } from "../../custom hooks/Hooks";

function NotFoundScreen() {
  const navigate = useNavigate();
  const { theme } = useTheme();

  return (
    <>
      <Helmet>
        <title>Page Not Found</title>
      </Helmet>
      <div
        className={`fixed inset-0 flex items-center justify-center ${
          theme === "dark" ? "bg-[var(--color-dark)]" : "bg-white"
        }`}
      >
        <div
          className={`max-w-4xl w-full p-5 ${
            theme === "dark"
              ? "text-[var(--color-light)]"
              : "text-[var(--color-dark)]"
          }`}
        >
          <div className="flex flex-col lg:flex-row items-center justify-center gap-10 lg:gap-28 text-center lg:text-left">
            <div className="text-center">
              <h1 className="text-8xl font-extrabold text-red-600">404</h1>
              <h1 className="text-4xl font-extrabold text-red-600">ERROR</h1>
            </div>
            <div className="flex flex-col gap-4">
              <h2 className="text-2xl font-extrabold">Oops!</h2>
              <h2 className="text-2xl font-extrabold">
                We were unable to find what you were looking for.
              </h2>
              <p className="text-gray-400 text-sm">
                The page you have requested cannot be found.
              </p>
              <p className="text-gray-400 text-sm">
                Error code: Page Not Found
              </p>
              <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-6 mt-4">
                <Link
                  to="/"
                  className="text-[var(--color-tab)] underline text-xs hover:text-[var(--color-link-hover)] transition-colors"
                >
                  Go to the homepage
                </Link>
                <Link
                  to=""
                  onClick={() => navigate(-1)}
                  className="text-[var(--color-tab)] underline text-xs hover:text-[var(--color-link-hover)] transition-colors"
                >
                  Go back
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default NotFoundScreen;
