import { useState } from "react";
import { useForm } from "react-hook-form";
import { useLoginMutation } from "../redux/api/features/auth/authApi";
import { toast } from "sonner";
import { setUser } from "../redux/api/features/auth/authSlice";
import { useAppDispatch } from "../redux/hooks";

type LoginFormInputs = {
  email: string;
  password: string;
  remember?: boolean;
};

export default function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormInputs>();

  const [showPassword, setShowPassword] = useState(false);
  const [login, { isLoading }] = useLoginMutation();
const dispatch = useAppDispatch()
  const onSubmit = async (data: LoginFormInputs) => {
    try {
      const result = await login(data).unwrap();
      toast.success(result?.data?.message || "Login successful");
      dispatch(setUser(result?.data))
      console.log(result.data.data)
    } catch (error: any) {
      console.error(error);
      toast.error(error?.data?.message || "Login failed");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 p-4">
      <div className="w-full max-w-md">
        <div className="bg-white shadow-lg rounded-2xl p-6 sm:p-8">
          <h1 className="text-2xl font-semibold tracking-tight text-gray-900 mb-1">
            Welcome back
          </h1>
          <p className="text-sm text-gray-600 mb-6">Sign in to your account</p>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
            {/* Email */}
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Email
              </label>
              <input
                id="email"
                type="email"
                autoComplete="email"
                className={`block w-full rounded-xl border px-4 py-2.5 outline-none focus:ring-4 transition ring-gray-200 focus:border-indigo-600 ${
                  errors.email
                    ? "border-red-500 focus:ring-red-100"
                    : "border-gray-300"
                }`}
                placeholder="you@example.com"
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                    message: "Enter a valid email",
                  },
                })}
              />
              {errors.email && (
                <p className="mt-1 text-sm text-red-600">
                  {errors.email.message}
                </p>
              )}
            </div>

            {/* Password */}
            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Password
              </label>
              <div className="relative">
                <input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  autoComplete="current-password"
                  className={`block w-full rounded-xl border px-4 py-2.5 pr-12 outline-none focus:ring-4 transition ring-gray-200 focus:border-indigo-600 ${
                    errors.password
                      ? "border-red-500 focus:ring-red-100"
                      : "border-gray-300"
                  }`}
                  placeholder="••••••••"
                  {...register("password", {
                    required: "Password is required",
                    minLength: { value: 6, message: "Minimum 6 characters" },
                  })}
                />
                <button
                  type="button"
                  onClick={() => setShowPassword((s) => !s)}
                  className="absolute inset-y-0 right-0 px-3 text-sm font-medium text-gray-600 hover:text-gray-900 focus:outline-none"
                  aria-label={showPassword ? "Hide password" : "Show password"}
                >
                  {showPassword ? "Hide" : "Show"}
                </button>
              </div>
              {errors.password && (
                <p className="mt-1 text-sm text-red-600">
                  {errors.password.message}
                </p>
              )}
            </div>

            {/* Remember + Forgot */}
            <div className="flex items-center justify-between">
              <label className="flex items-center gap-2 text-sm text-gray-700">
                <input
                  type="checkbox"
                  className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-0"
                  {...register("remember")}
                />
                Remember me
              </label>
              <a href="#" className="text-sm text-indigo-600 hover:underline">
                Forgot password?
              </a>
            </div>

            <button
              type="submit"
              disabled={isLoading}
              className="w-full rounded-xl bg-indigo-600 text-white py-2.5 font-medium shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-4 focus:ring-indigo-200 disabled:opacity-70 disabled:cursor-not-allowed"
            >
              {isLoading ? "Signing in…" : "Sign in"}
            </button>
          </form>

          <p className="mt-6 text-center text-sm text-gray-600">
            Don&apos;t have an account?{" "}
            <a href="#" className="font-medium text-indigo-600 hover:underline">
              Sign up
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
