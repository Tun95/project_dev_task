import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Mail, Lock, AlertCircle, Eye, EyeOff } from "lucide-react";

import { Formik, Form, Field, ErrorMessage } from "formik";
import { toast } from "sonner";
import { loginSchema } from "../../schema";
import { AxiosError } from "axios";

const Login = () => {
  const navigate = useNavigate();

  const [passwordType, setPasswordType] = useState<"password" | "text">(
    "password"
  );

  const [error, setError] = useState<string | null>(null);

  const { search } = useLocation();
  const sp = new URLSearchParams(search);
  const redirect = sp.get("redirect") || "/";

  // Toggle password visibility
  const handleToggle = () => {
    setPasswordType(passwordType === "password" ? "text" : "password");
  };

  //==========================
  // Handle form submission
  //==========================
  const handleSubmit = async () => {
    setError(null);

    try {
      toast.success("Login successful");
      navigate(redirect);
    } catch (err: unknown) {
      if (err instanceof AxiosError) {
        setError("An error occurred");
      } else {
        setError("An unexpected error occurred");
      }
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex items-center justify-center p-6 max-480px:p-4">
      <div className="w-full max-w-md">
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 max-480px:p-6 max-480px:px-5">
          <div className="text-center mb-8">
            <span className="font-display text-2xl font-semibold text-gray-900 dark:text-white">
              Project Dev.
            </span>
            <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">
              Sign in to your Project Dev account
            </p>
          </div>

          {error && (
            <div className="mb-6 p-4 bg-red-50 dark:bg-red-900/20 rounded-lg">
              <div className="flex items-start gap-2 text-sm text-red-600 dark:text-red-400">
                <AlertCircle size={16} className="mt-0.5 flex-shrink-0" />
                <p>{error}</p>
              </div>
            </div>
          )}

          <Formik
            initialValues={{ email: "", password: "" }}
            validationSchema={loginSchema}
            onSubmit={handleSubmit}
          >
            {({ touched, errors, isSubmitting }) => (
              <Form className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Email Address
                  </label>
                  <div className="relative">
                    <Mail
                      className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 dark:text-gray-500"
                      size={16}
                    />
                    <Field
                      type="email"
                      name="email"
                      className={`w-full h-9 text-sm bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white pl-10 pr-4 py-2.5 rounded-lg border ${
                        touched.email && errors.email
                          ? "border-red-500"
                          : "border-gray-200 dark:border-gray-700"
                      } focus:outline-none focus:border-gray-300 dark:focus:border-gray-600`}
                      placeholder="Enter your email"
                    />
                  </div>{" "}
                  <ErrorMessage
                    name="email"
                    component="div"
                    className="text-sm text-red-500 mt-1"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Password
                  </label>
                  <div className="relative">
                    <Lock
                      className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 dark:text-gray-500"
                      size={16}
                    />
                    <Field
                      type={passwordType}
                      name="password"
                      className={`w-full h-9 text-sm bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white pl-10 pr-4 py-2.5 rounded-lg border ${
                        touched.password && errors.password
                          ? "border-red-500"
                          : "border-gray-200 dark:border-gray-700"
                      } focus:outline-none focus:border-gray-300 dark:focus:border-gray-600`}
                      placeholder="Enter your password"
                    />
                    <span
                      className="absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer"
                      onClick={handleToggle}
                    >
                      {passwordType === "password" ? (
                        <Eye size={16} />
                      ) : (
                        <EyeOff size={16} />
                      )}
                    </span>
                  </div>
                  <ErrorMessage
                    name="password"
                    component="div"
                    className="text-sm text-red-500 mt-1"
                  />
                </div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full px-4 py-2.5 bg-gray-900 dark:bg-white text-white dark:text-gray-900 rounded-lg text-sm font-medium hover:bg-gray-800 dark:hover:bg-gray-100 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <span className="l_flex">
                      <i className="fa fa-spinner fa-spin"></i>
                      Signing in...
                    </span>
                  ) : (
                    "Sign in"
                  )}
                </button>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </div>
  );
};

export default Login;
